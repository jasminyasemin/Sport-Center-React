function ClassSchedule({ schedule }) {
  return (
    <ul className="text-content">
      {schedule.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default ClassSchedule