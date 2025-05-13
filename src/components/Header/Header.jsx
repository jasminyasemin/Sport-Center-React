import Logo from './Logo'
import NavBar from './NavBar'
import HamburgerMenu from './HamburgerMenu'

function Header() {
  return (
    <header id="header">
      <div className="container">
        <Logo />
        <HamburgerMenu />
        <NavBar />
      </div>
    </header>
  )
}

export default Header