import { Box, PostImg, PostInfo } from './styles';

export const PostBox = () => {
  return (
    <Box to='/'>
      <PostImg
        src='https://natanaelexe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdkdec5eni%2Fimage%2Fupload%2Fv1606937523%2Fnextjs_blog_1a432dd87b.jpg&w=1920&q=80'
        alt=''
      />

      <PostInfo>
        <span>Development</span>
        <h2>Why you should use nextjs</h2>
        <p>
          When you build a project, you may choose the correct tools and stacks for your project, and sometimes you ask
          yourself this...
        </p>

        <span id='more'>Read more...</span>
      </PostInfo>
    </Box>
  );
};
