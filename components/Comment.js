import { COMMENT } from "../common-types";

const Comment = ({ body, name }) => (
  <div>
    <h4>{name}</h4>
    <p>{body}</p>
  </div>
);

Comment.propTypes = COMMENT;

export default Comment;
