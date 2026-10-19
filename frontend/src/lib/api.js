import axios from 'axios'

// Simple JS API client for DRF backend.
// Why: centralizes baseURL + JSON headers so pages just call api.get('/home/')
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
