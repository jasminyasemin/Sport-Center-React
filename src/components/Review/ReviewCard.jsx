function ReviewCard({ name, role, image, comment }) {
  return (
    <div className="review-box">
      <div className="review-header">
        <img src={image} alt={name} className="review-img" />
        <div className="review-info">
          <h4>{name}</h4>
          <p className="role">{role}</p>
        </div>
      </div>
      <div className="bubble">
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard