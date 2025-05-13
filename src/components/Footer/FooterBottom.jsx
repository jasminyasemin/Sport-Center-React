import FooterSection from './FooterSection'

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <FooterSection
        title="Information"
        links={['About Us', 'Classes', 'Blog', 'Contact']}
      />
      <FooterSection
        title="Helpful Links"
        links={['Services', 'Support', 'Terms & Condition', 'Privacy Policy']}
      />
    </div>
  )
}

export default FooterBottom