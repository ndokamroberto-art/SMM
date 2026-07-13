const API = {
    base: window.location.origin + '/api',
    
    async request(endpoint, options = {}) {
        const url = `${this.base}${endpoint}`;
        const headers = { 'Content-Type': 'application/json' };

        const response = await fetch(url, { ...options, headers });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Une erreur est survenue');
        return data;
    },

    getServices() { return this.request('/orders/services'); },
    createOrder(data) { return this.request('/orders/create', { method: 'POST', body: JSON.stringify(data) }); },
    getOrders() { return this.request('/orders'); },
    getOrder(id) { return this.request(`/orders/${id}`); }
};

let allServices = [];

document.addEventListener('DOMContentLoaded', async () => {
    await loadServices();
    await loadOrders();
    setupEventListeners();
});

async function loadServices() {
    try {
        const result = await API.getServices();
        allServices = result.services || [];
        renderServices(allServices);
    } catch (error) {
        console.error('Load services error:', error);
        document.getElementById('servicesGrid').innerHTML = '<p class="error">Failed to load services. Please refresh.</p>';
    }
}

function renderServices(services) {
    const grid = document.getElementById('servicesGrid');
    if (!services || services.length === 0) {
        grid.innerHTML = '<p class="text-center">No services available</p>';
        return;
    }

    grid.innerHTML = services.map(service => `
        <div class="service-card" onclick="showOrderForm('${service.id}')">
            <div class="icon">${getServiceIcon(service.category)}</div>
            <h3>${service.name}</h3>
            <p>${service.description || ''}</p>
            <div class="service-meta">
                <span class="type-badge ${service.serviceType.toLowerCase()}">${service.serviceType}</span>
                <span class="country-badge">${service.countryTargets ? service.countryTargets.join(', ') : '🌍 All'}</span>
            </div>
            <div class="service-range">
                Min: ${service.minOrder} - Max: ${service.maxOrder}
            </div>
            <button class="btn btn-primary btn-sm">Order Now</button>
        </div>
    `).join('');
}

function filterServices() {
    const platformFilter = document.getElementById('platformFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;

    let filtered = allServices;

    if (platformFilter !== 'all') {
        filtered = filtered.filter(s => s.category === platformFilter);
    }

    if (typeFilter !== 'all') {
        filtered = filtered.filter(s => s.serviceType === typeFilter);
    }

    renderServices(filtered);
}

function showOrderForm(serviceId) {
    const service = allServices.find(s => s.id === serviceId);
    if (!service) return;

    document.getElementById('selectedServiceId').value = serviceId;
    document.getElementById('selectedServiceName').textContent = `${service.name} (${service.category})`;
    document.getElementById('quantityRange').textContent = `Min: ${service.minOrder} - Max: ${service.maxOrder}`;
    document.getElementById('orderQuantity').min = service.minOrder;
    document.getElementById('orderQuantity').max = service.maxOrder;
    document.getElementById('orderQuantity').value = service.minOrder;

    // Show/hide country for targeted
    const typeSelect = document.getElementById('orderType');
    const countryGroup = document.getElementById('countryGroup');
    
    // Set default type
    if (service.serviceType) {
        typeSelect.value = service.serviceType;
        countryGroup.style.display = service.serviceType === 'TARGETED' ? 'block' : 'none';
    }

    document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' });
}

async function loadOrders() {
    try {
        const result = await API.getOrders();
        const orders = result.orders || [];
        const tbody = document.getElementById('ordersList');

        if (orders.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No orders yet. Place your first order above!</td></tr>';
            return;
        }

        tbody.innerHTML = orders.map(order => `
            <tr>
                <td>#${order.id.slice(0, 8)}</td>
                <td>${order.service?.name || 'N/A'}</td>
                <td><span class="type-badge ${order.serviceType.toLowerCase()}">${order.serviceType}</span></td>
                <td>${order.countryTarget ? getCountryFlag(order.countryTarget) + ' ' + order.countryTarget : '🌍'}</td>
                <td>${order.quantity}</td>
                <td>${order.deliveredCount || 0}</td>
                <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                <td>${new Date(order.createdAt).toLocaleDateString('fr-CM')}</td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Load orders error:', error);
    }
}

function setupEventListeners() {
    // Order type toggle
    document.getElementById('orderType').addEventListener('change', function() {
        const countryGroup = document.getElementById('countryGroup');
        countryGroup.style.display = this.value === 'TARGETED' ? 'block' : 'none';
    });

    // Order form submission
    document.getElementById('createOrderForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '⏳ Processing...';
        btn.disabled = true;

        const formData = new FormData(e.target);
        const data = {
            serviceId: document.getElementById('selectedServiceId').value,
            targetUrl: formData.get('targetUrl'),
            quantity: parseInt(formData.get('orderQuantity')),
            serviceType: formData.get('orderType'),
            countryTarget: formData.get('orderType') === 'TARGETED' ? formData.get('orderCountry') : 'CM'
        };

        if (!data.serviceId || !data.targetUrl || !data.quantity) {
            alert('Please fill in all fields');
            btn.textContent = originalText;
            btn.disabled = false;
            return;
        }

        try {
            const result = await API.createOrder(data);
            
            // Show success with details
            const countryName = getCountryName(data.countryTarget);
            alert(`✅ ORDER COMPLETE!\n\nService: ${result.order.service.name}\nCountry: ${countryName}\nProfiles Delivered: ${result.profilesDelivered || result.order.deliveredCount}\nStatus: ${result.order.status}\n\n🎯 All profiles match ${countryName} names and culture!`);

            // Reset form
            document.getElementById('createOrderForm').reset();
            document.getElementById('orderForm').style.display = 'none';
            
            // Refresh orders
            await loadOrders();
            
            // Show orders section
            document.getElementById('my-orders').scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            alert('❌ Error: ' + error.message);
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}

function getServiceIcon(category) {
    const icons = {
        'INSTAGRAM': '📸',
        'TIKTOK': '🎵',
        'YOUTUBE': '▶️',
        'FACEBOOK': '👍',
        'TWITTER': '🐦'
    };
    return icons[category] || '📱';
}

function getCountryFlag(code) {
    const flags = {
        'CM': '🇨🇲', 'US': '🇺🇸', 'GB': '🇬🇧', 'FR': '🇫🇷',
        'AU': '🇦🇺', 'CA': '🇨🇦', 'NG': '🇳🇬', 'ZA': '🇿🇦',
        'KE': '🇰🇪', 'SN': '🇸🇳', 'CI': '🇨🇮', 'GH': '🇬🇭'
    };
    return flags[code] || '🌍';
}

function getCountryName(code) {
    const names = {
        'CM': 'Cameroon', 'US': 'United States', 'GB': 'United Kingdom', 'FR': 'France',
        'AU': 'Australia', 'CA': 'Canada', 'NG': 'Nigeria', 'ZA': 'South Africa',
        'KE': 'Kenya', 'SN': 'Senegal', 'CI': 'Ivory Coast', 'GH': 'Ghana'
    };
    return names[code] || code;
}

window.filterServices = filterServices;
window.showOrderForm = showOrderForm;
window.getCountryFlag = getCountryFlag;