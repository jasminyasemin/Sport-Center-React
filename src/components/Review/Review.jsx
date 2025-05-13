import SectionHeader from '../Trainers/SectionHeader'
import ReviewList from './ReviewList'

function Review() {
  return (
    <section id="review" className="text-center">
      <div className="container">
        <SectionHeader
          title="REVIEW CLIENT"
          description="Lorem Ipsun is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <ReviewList />
      </div>
    </section>
  )
}

export default Review