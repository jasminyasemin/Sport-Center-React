import ClassImage from './ClassImage'
import ClassText from './ClassText'
import ClassSchedule from './ClassSchedule'

function ClassContent({ data }) {
  return (
    <section className="container-2">
      <ClassText title={data.title} description={data.description} />
      <ClassSchedule schedule={data.schedule} />
      <ClassImage src={data.img} alt={data.alt} />
    </section>
  )
}

export default ClassContent