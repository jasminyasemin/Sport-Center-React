import StatBox from './StatBox'
import stats from './StatsData'

function StatsContainer() {
  return (
    <div className="row">
      {stats.map((item, index) => (
        <StatBox key={index} number={item.number} label={item.label} />
      ))}
    </div>
  )
}

export default StatsContainer