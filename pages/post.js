import fetch from "isomorphic-unfetch";
import Details from "../components/Details";

const Post = props => (
  <Details comments={props.comments} noLink={true} post={props.post} />
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const fetchComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const fetchPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await fetchUsers.json();
  const comments = await fetchComments.json();
  const post = await fetchPost.json();
  const user = users.filter(user => user.id === post.userId)[0];

  return {
    comments,
    post: {
      ...post,
      user
    }
  };
};

export default Post;
