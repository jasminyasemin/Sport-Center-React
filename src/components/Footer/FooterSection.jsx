function FooterSection({ title, links }) {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSection