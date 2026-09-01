function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`section-heading reveal align-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export default SectionHeading
