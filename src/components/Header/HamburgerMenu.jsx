function HamburgerMenu() {
  const toggleMenu = () => {
    const nav = document.querySelector(".navbar-nav")
    nav.classList.toggle("active")
  }

  return (
    <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  )
}

export default HamburgerMenu
