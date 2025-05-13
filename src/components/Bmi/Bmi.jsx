import { useState } from 'react'
import BmiInfo from './BmiInfo'
import BmiForm from './BmiForm'
import BmiVisual from './BmiVisual'

function Bmi() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  return (
    <section id="bmi">
      <div className="container">
        <BmiInfo />
        <BmiForm height={height} weight={weight} setHeight={setHeight} setWeight={setWeight} />
        <BmiVisual height={height} weight={weight} />
      </div>
    </section>
  )
}

export default Bmi