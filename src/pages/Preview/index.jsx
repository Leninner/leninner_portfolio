import { Container, Link } from './styles';
import inConstructionGif from '../../utils/personal.gif';

export const Preview = () => {
  return (
    <Container>
      <h1>
        Site Under <span>Construction</span>
      </h1>
      <p>
        See my <Link href='https://github.com/leninner'>Github Profile</Link> to see others projects.
      </p>
      <img src={inConstructionGif} alt='personalUse' />
    </Container>
  );
};
