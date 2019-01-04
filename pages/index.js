import fetch from "isomorphic-unfetch";
import Modal from "../components/Modal";
import Posts from "../components/Posts";

const Index = props => (
  <>
    <h2>Home</h2>
    <p>
      A Twitter-like sample app with a perfect Google Lighthouse score. Check
      out the{" "}
      <a
        href="https://github.com/seejamescode/nextter"
        rel="noopener noreferrer"
        target="_blank"
      >
        <strong>source code</strong>
      </a>{" "}
      to figure out how it all works. Steps of creating the project are broken
      up in the commits.
    </p>
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
    <Posts posts={props.posts} />
  </>
);

Index.getInitialProps = async function() {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await fetchUsers.json();
  let posts = await fetchPosts.json();

  // Find user info of each post
  // Then do shallow randomization for order
  posts = posts
    .map(post => {
      return {
        ...post,
        user: users.filter(user => user.id === post.userId)[0]
      };
    })
    .sort(() => 0.5 - Math.random());

  return {
    posts
  };
};

export default Index;
