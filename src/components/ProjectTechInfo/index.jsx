import { TechInfoContainer } from './styles';

export const ProjectTechInfo = () => {
  return (
    <TechInfoContainer>
      <h2>Tech Info</h2>
      {/* Este div debe tener scroll */}
      <div>
        <div>
          <img src='' alt='' />
          <div>
            <h2>React</h2>
            <p>React is the most popular UI library that allows dev. Build great UI and fast app…</p>
          </div>
        </div>

        <div>
          <img src='' alt='' />
          <div>
            <h2>Redux</h2>
            <p>React is the most popular UI library that allows dev. Build great UI and fast app…</p>
          </div>
        </div>

        <div>
          <img src='' alt='' />
          <div>
            <h2>Styled Components</h2>
            <p>React is the most popular UI library that allows dev. Build great UI and fast app…</p>
          </div>
        </div>
      </div>
    </TechInfoContainer>
  );
};
