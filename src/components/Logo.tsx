import { Link } from "@tanstack/react-router"

const Logo = () => {
  return (
    <Link to="/">
    <img src="./logo.png" alt="Logo" className="w-12 h-12" />
    </Link>
  )
}

export default Logo