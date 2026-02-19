import { api } from '@/lib/api-client'
import type { User } from './types'

export async function registration(data: {
  email: string
  password1: string
  password2: string
}) {
  const response = await api.post('/auth/registration/', data)
  return response.data
}

export async function login(data: { email: string; password: string }) {
  const response = await api.post('/auth/login/', data)
  return response.data
}
2
export async function loginWithGoogle(codeResponse: { code: string }) {
  const response = await api.post('/auth/google/', {
    code: codeResponse.code,
  })
  return response.data
}

export async function getUserData(): Promise<User | null> {
  const response = await api.get('/auth/user/')
  return response.data
}
