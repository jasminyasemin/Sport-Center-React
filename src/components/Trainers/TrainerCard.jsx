function TrainerCard({ name, title, image }) {
  return (
    <div className="trainer-card">
      <div className="trainer-border">
        <div className="trainer-box">
          <img src={image} alt={name} />
          <div className="trainer-info">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="side"></div>
    </div>
  )
}

export default TrainerCard