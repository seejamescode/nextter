import PropTypes from "prop-types";
import Post from "../components/Post";
import { POST } from "../common-types";

const Posts = ({ noLink, posts }) => (
  <>
    {posts.map(post => (
      <Post key={post.id} noLink={noLink} post={post} />
    ))}
  </>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(POST)).isRequired
};

export default Posts;
