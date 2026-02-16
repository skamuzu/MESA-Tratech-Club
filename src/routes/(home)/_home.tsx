import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import HomeNavBar from './-components/HomeNavBar'

export const Route = createFileRoute('/(home)/_home')({ component: App })

function App() {
 return (
  <>
  <HomeNavBar/>
  <Outlet />
  </>
 )
}
