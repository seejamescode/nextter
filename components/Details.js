import PropTypes from "prop-types";
import Comment from "./Comment";
import PageTitle from "./PageTitle";
import Post from "./Post";
import { COMMENT, POST } from "../common-types";

const Details = ({ comments, noLink, post }) => (
  <>
    <PageTitle>Details</PageTitle>
    <Post noLink={noLink} post={post} />
    {comments.map(comment => (
      <Comment body={comment.body} key={comment.id} name={comment.name} />
    ))}
  </>
);

Details.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(COMMENT)).isRequired,
  post: PropTypes.shape(POST)
};

export default Details;
