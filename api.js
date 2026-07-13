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

window.API = API;
