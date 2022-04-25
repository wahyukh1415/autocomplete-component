import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import { useStorage } from '@vueuse/core'

const instance = applyCaseMiddleware(axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    Accept: 'application/json',
  },
}))

instance.interceptors.request.use((config) => {
  const token = useStorage('auth.token')
  if (token.value !== null) {
    config.headers["Authorization"] = `Bearer ${token.value}`
  }

  return config
})

export const request = async (config, options) => {
  if (typeof config === 'string') {
    if (!options) {
      return instance.request({
        url: config,
      })
    }

    return instance.request({
      url: config,
      ...options,
    })
  }

  return instance.request(config)
}

export const get = async (config, options) => request({ ...config, method: 'GET' }, options)

export const post = async (config, options) => request({ ...config, method: 'POST' }, options)

export const put = async (config, options) => request({ ...config, method: 'PUT' }, options)
