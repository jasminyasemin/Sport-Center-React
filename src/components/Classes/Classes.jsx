import { useState } from 'react'
import Title from './Title'
import ButtonGroup from './ButtonGroup'
import ClassContent from './ClassContent'
import classData from './classData'

function Classes() {
  const [activeClass, setActiveClass] = useState('yoga')

  return (
    <section id="classes" className="custom-section text-center">
      <div className="container">
        <Title />
        <ButtonGroup activeClass={activeClass} setActiveClass={setActiveClass} />
        <ClassContent data={classData[activeClass]} />
      </div>
    </section>
  )
}

export default Classes