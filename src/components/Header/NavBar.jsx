function NavBar() {
  return (
    <nav id="navbar" className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="#hero-wrapper">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#classes">Classes</a></li>
        <li className="nav-item"><a className="nav-link" href="#trainer">Trainer</a></li>
        <li className="nav-item"><a className="nav-link" href="#review">Review</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        <li><button type="button" className="btn">JOIN US</button></li>
      </ul>
    </nav>
  )
}

export default NavBar