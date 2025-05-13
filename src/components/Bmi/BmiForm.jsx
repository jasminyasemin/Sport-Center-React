function BmiForm({ height, weight, setHeight, setWeight }) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="number"
          step="0.01"
          id="height"
          placeholder="Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <span className="label">cm</span>
      </div>

      <div className="input-box">
        <input
          type="number"
          id="weight"
          placeholder="Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <span className="label">kg</span>
      </div>
    </div>
  )
}

export default BmiForm