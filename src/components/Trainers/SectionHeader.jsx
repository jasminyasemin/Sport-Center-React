function SectionHeader({ title, description }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="underline"></div>
      <p className="description">{description}</p>
    </>
  )
}

export default SectionHeader