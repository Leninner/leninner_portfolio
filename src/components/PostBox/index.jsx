import { Box, PostImg, PostInfo } from './styles'

export const PostBox = ({ post }) => {
  console.log(post)
  const { title, link, thumbnail, pubDate, description } = post
  const date = new Date(pubDate).toDateString()
  return (
    <Box href={link} target="_blank" rel="noreferrer">
      <PostImg src={thumbnail} alt="" />

      <PostInfo>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{description.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}...</p>

        <span id="more">Read more...</span>
      </PostInfo>
    </Box>
  )
}
