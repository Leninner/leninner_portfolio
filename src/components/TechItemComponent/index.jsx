export const TechItemComponent = ({ TechItem, Icon }) => {
  return (
    <TechItem>
      <Icon size='90' />
      <div>
        <h2>
          <a href='https://es.reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </a>
        </h2>
        <p>React is the most popular UI library that allows dev. Build great UI and fast app…</p>
      </div>
    </TechItem>
  );
};
