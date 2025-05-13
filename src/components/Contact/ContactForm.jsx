function ContactForm() {
  return (
    <div className="form-box">
      <h5>Make An Appoinment</h5>
      <form>
        <input type="text" id="name" name="name" placeholder="Your Name" /><br />
        <input type="email" id="email" name="email" placeholder="Your Email" required /><br />
        <textarea id="message" name="message" rows="4" cols="50" placeholder="Your Message" required></textarea>
      </form>
    </div>
  )
}

export default ContactForm