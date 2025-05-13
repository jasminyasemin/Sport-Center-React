import TrainerCard from './TrainerCard'
import trainers from './trainersData'

function TrainerList() {
  return (
    <div id="trainer-container">
      {trainers.map((trainer, i) => (
        <TrainerCard key={i} {...trainer} />
      ))}
    </div>
  )
}

export default TrainerList