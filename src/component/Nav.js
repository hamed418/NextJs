import Link from "next/link"

const Nav = () => {
  return (
    <div>
        <ul>
          <li><Link href='notes'>Notes</Link></li>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='contact'>Contact page</Link></li>
            <li><Link href='blog'>Blog page</Link></li>
        </ul>
    </div>
  )
}

export default Nav