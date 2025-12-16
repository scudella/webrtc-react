import {createContext} from 'react'

export type User = {
  userId: string
  name: string
  email: string
  picture: string
  role: 'user' | 'admin'
}

export type DashboardProviderState = {
  user: User | null
  setUser: (user: User | null) => void
  logoutUser: () => Promise<void>
}

export const DashboardContext = createContext<DashboardProviderState | null>(
  null
)
