import { Title } from '../ProjectsContainer/styles';
import { BlogContainer, ShowAllButton } from './styles';
import { PostBox } from '../../components/PostBox';

export const Blog = () => {
  return (
    <>
      <Title>
        <span>My Blog </span>and Updates
      </Title>

      <BlogContainer>
        <PostBox />
        <PostBox />
        <PostBox />
      </BlogContainer>

      <ShowAllButton to='/home'>Show All</ShowAllButton>
    </>
  );
};
