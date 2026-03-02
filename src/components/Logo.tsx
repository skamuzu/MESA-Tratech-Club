import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

const Logo = ({className}: {className? : string}) => {
  return (
    <Link to="/">
  <img src="/logo.png" alt="Logo" className={cn("w-12 h-12", className)}/>
    </Link>
  )
}

export default Logo