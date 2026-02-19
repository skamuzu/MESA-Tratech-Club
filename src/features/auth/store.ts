import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type User = {
  id: string
  email: string
  image: string
}

interface AuthState {
  user: null | User
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<AuthState>()(devtools((set) => ({
    user: null,
    setUser: (user) => set({user}),
    logout: () => set({ user: null }),
})))
