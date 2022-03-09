import { Title } from '../ProjectsContainer/styles';
import { BlogContainer, ShowAllButton } from './styles';
import { PostBox } from '../../components/PostBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Blog = () => {
  const [posts, setPosts] = useState({ loading: true, data: [] });

  useEffect(() => {
    const getSome = async () => {
      const res = await axios(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40leninner'
      );

      setPosts({ loading: false, data: res.data.items });
    };

    getSome();
  }, []);

  const { loading, data } = posts;

  return (
    <>
      <Title>
        <span>My Blog and</span> Updates (In Spanish)
      </Title>

      <BlogContainer>
        {loading && <p>Loading...</p>}
        {data.slice(0, 3).map((post, index) => (
          <PostBox key={index} post={post} />
        ))}
      </BlogContainer>

      <ShowAllButton href='https://medium.com/@leninner' target='_blank' rel='noreferrer'>
        Show All
      </ShowAllButton>
    </>
  );
};
