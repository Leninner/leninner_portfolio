import { SkillsContainer, SkillsItems } from './styles';
import { DiJavascript1, DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { SiTailwindcss, SiRedux } from 'react-icons/si';

export const Skills = () => {
  const SIZE = '6rem';
  const COLOR = 'white';

  return (
    <SkillsContainer id='skills'>
      <h1>
        I use Techs <span>in Demand</span>
      </h1>
      <SkillsItems>
        <div>
          <DiJavascript1 size={SIZE} color={COLOR} />
          <span>JavaScript</span>
        </div>

        <div>
          <DiReact size={SIZE} color={COLOR} />
          <span>React</span>
        </div>

        <div>
          <SiRedux size={SIZE} color={COLOR} />
          <span>Redux</span>
        </div>

        <div>
          <SiTailwindcss size={SIZE} color={COLOR} />
          <span>Tailwind CSS</span>
        </div>

        <div>
          <DiHtml5 size={SIZE} color={COLOR} />
          <span>HTML5</span>
        </div>

        <div>
          <DiCss3 size={SIZE} color={COLOR} />
          <span>CSS</span>
        </div>
      </SkillsItems>
    </SkillsContainer>
  );
};
