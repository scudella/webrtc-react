import {useContext} from 'react'
import {DashboardContext} from './dashboard-context'

export function useDashboardContext() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider'
    )
  }
  return context
}
