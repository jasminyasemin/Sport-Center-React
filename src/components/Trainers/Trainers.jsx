import SectionHeader from './SectionHeader'
import TrainerList from './TrainerList'

function Trainers() {
  return (
    <section id="trainer" className="text-center">
      <div className="container">
        <SectionHeader
          title="OUR BEST TRAINERS"
          description="Lorem Ipsun is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <TrainerList />
      </div>
    </section>
  )
}

export default Trainers