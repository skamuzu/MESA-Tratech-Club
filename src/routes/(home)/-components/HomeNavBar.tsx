import Logo from '../../../components/Logo'
import { NAVIGATION_LINKS } from '@/lib/constants'
import { Button } from '../../../components/ui/button'
import { Link } from '@tanstack/react-router'
import HomeSheet from './HomeSheet'
import UserAvatar from '@/features/auth/components/userAvatar'
import { useUser } from '@/features/auth/queries'


export default function HomeNavBar() {
  const { data } = useUser()
  return (
    <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl p-4">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="lg:flex hidden flex-1 justify-center">
        {NAVIGATION_LINKS.map((link) => (
          <Button
            key={link.name}
            variant={'link'}
            asChild
            className="text-xl text-muted-foreground"
          >
            <Link to={link.href}>{link.name}</Link>
          </Button>
        ))}
      </div>
      {data ? 
      <div className='flex-1 flex justify-end items-center'>
        <UserAvatar/>
        <HomeSheet />        
      </div>
      : 
      <div className="flex flex-1 space-x-4  items-center justify-end">
        <Link to="/sign-in">
          <Button variant={'link'} className="text-lg text-muted-foreground cursor-pointer">
            Log In
          </Button>
        </Link>
        <Link to="/sign-up">
        <Button variant={'link'} className="text-lg text-muted-foreground cursor-pointer">
          Sign Up
        </Button>
        </Link>
        <HomeSheet />
      </div> }
    
    </nav>
  )
}
