function StatBox({ number, label }) {
  return (
    <div className="col col-md-2">
      <p className="x1">{number}</p>
      <p className="x2">{label}</p>
    </div>
  )
}

export default StatBox