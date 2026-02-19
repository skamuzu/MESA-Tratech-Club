import axios from 'axios'
import { queryClient } from './query-client'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/token/refresh/")
    ) {
      originalRequest._retry = true

      try {
        await api.post(`${import.meta.env.VITE_BASE_URL}/auth/token/refresh/`)
        return api(originalRequest)
      } catch (refreshError) {
        queryClient.clear()
        window.location.href = '/sign-in'
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)
