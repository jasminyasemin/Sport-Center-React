function BmiVisual({ height, weight }) {
  const imageWidth = 500
  const minBMI = 10
  const maxBMI = 40

  let bmi = 0
  let position = imageWidth / 2

  if (height && weight) {
    bmi = weight / ((height / 100) ** 2)
    position = ((bmi - minBMI) / (maxBMI - minBMI)) * imageWidth
    position = Math.max(0, Math.min(position, imageWidth))
  }

  return (
    <div className="image-container">
      <h3 className="image-title">Your BMI</h3>
      <img id="bmi-image" className="bmi-image" src="/img/bmi-index.jpg" alt="BMI index" />
      <div id="triangle" className="triangle" style={{ left: `${position}px` }}></div>
    </div>
  )
}

export default BmiVisual