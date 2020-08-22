import { useRouter } from "next/router"
import Link from "next/link"

export default ActiveLink = ({ children, href }) => {
  const router = useRouter()
  console.log(router.pathname)

  const style = {
    backgroundColor: router.pathname === href ? "rgba(255, 255, 0, 0.7)" : "",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
