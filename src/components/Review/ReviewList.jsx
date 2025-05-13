import ReviewCard from './ReviewCard'
import reviews from './reviewData'

function ReviewList() {
  return (
    <div className="review-container">
      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </div>
  )
}

export default ReviewList