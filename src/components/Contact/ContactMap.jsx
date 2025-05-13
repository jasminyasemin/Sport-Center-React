function ContactMap() {
  return (
    <div className="map-box">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12028.667371997095!2d29.061359254870347!3d41.0872011143937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca22fbc9bc6d%3A0x79952cd98b064cfa!2sAnadolu%20Hisar%C4%B1%2C%2034810%20Beykoz%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1742686019413!5m2!1str!2str"
        width="500"
        height="330"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export default ContactMap