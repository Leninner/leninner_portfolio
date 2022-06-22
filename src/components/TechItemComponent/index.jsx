export const TechItemComponent = ({ TechItem, Icon, name, link, description }) => {
  return (
    <TechItem>
      {Icon}
      <div>
        <h2>
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </TechItem>
  )
}
