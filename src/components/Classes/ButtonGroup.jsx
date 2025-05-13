const classTypes = ['yoga', 'group', 'solo', 'stretching']

function ButtonGroup({ activeClass, setActiveClass }) {
  return (
    <div id="button-container" className="mt-5">
      {classTypes.map(type => (
        <button
          key={type}
          className={`custom-btn ${activeClass === type ? 'active-btn' : ''}`}
          onClick={() => setActiveClass(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup