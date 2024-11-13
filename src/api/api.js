import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    }
)

// tasks
export const fetchTasks = () => api.get('/tasks')
export const createTask = (task) => api.post('/tasks', task)
export const updateTask = (id, task) => api.patch(`/tasks/${id}/done`, task)
export const deleteTask = (id) => api.delete(`/tasks/${id}`)

// users
export const loginUser = (user) => api.post('/users/login', user)
export const fetchUsers = () => api.get('/users/profile')
export const updateUser = (user) => api.put('/users/profile', user)