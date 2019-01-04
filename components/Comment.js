import { COMMENT } from "../common-types";
import styled from "styled-components";

const Container = styled.div`
  padding: var(--padding) 0;
`;

const Name = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 auto 0.35rem auto;
`;

const Comment = ({ body, name }) => (
  <Container>
    <Name>{name}</Name>
    <p>{body}</p>
  </Container>
);

Comment.propTypes = COMMENT;

export default Comment;
