import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

const User = props => (
  <>
    {props.router.query.post && (
      <Modal
        post={
          props.posts.filter(
            post => post.id === parseInt(props.router.query.post, 10)
          )[0]
        }
        route={props.router.route}
      />
    )}
    <h2>User</h2>
    {props.posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </>
);

User.getInitialProps = async function(context) {
  const { id } = context.query;
  const fetchPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await fetchUsers.json();
  const user = users.filter(user => user.id === parseInt(id, 10))[0];
  let posts = await fetchPosts.json();

  posts = posts.map(post => {
    return {
      ...post,
      user: users.filter(user => user.id === post.userId)[0]
    };
  });

  return {
    posts,
    user
  };
};

export default User;
