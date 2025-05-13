import SectionHeader from '../Trainers/SectionHeader'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="container">
        <SectionHeader
          title="CONTACT US"
          description="Lorem Ipsun is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <div className="contact-container">
          <ContactInfo />
          <div className="form-map-container">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact