import fetch from "isomorphic-unfetch";
import Router from "next/router";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styled from "styled-components";
import Anchor from "./Anchor";
import Details from "./Details";
import { POST } from "../common-types";

const ButtonClose = styled(Anchor)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  position: absolute;
  right: var(--padding);
  top: var(--padding);
  z-index: 2;
`;

export default class Modal extends React.Component {
  static propTypes = {
    post: PropTypes.shape(POST),
    route: PropTypes.string.isRequired
  };

  state = {
    comments: [],
    post: {
      user: {}
    }
  };

  componentDidMount() {
    const { post } = this.props;
    this.fetchPostComments(post.id);
  }

  clearPost() {
    const { route } = this.props;

    Router.push(route, route, { shallow: true });
  }

  fetchPostComments(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(comments => {
        this.setState({
          comments
        });
      });
  }

  render() {
    const { post } = this.props;

    return (
      <ReactModal
        appElement={document.body}
        isOpen={true}
        onRequestClose={() => this.clearPost()}
        style={{
          content: {
            background: "var(--background--2)",
            bottom: "var(--padding)",
            border: "none",
            borderRadius: 0,
            left: "var(--padding)",
            padding: "var(--padding)",
            right: "var(--padding)",
            top: "var(--padding)"
          },
          overlay: {
            background: "none"
          }
        }}
      >
        <ButtonClose as="button" onClick={() => this.clearPost()}>
          Close
        </ButtonClose>
        <Details post={post} comments={this.state.comments} noLink={true} />
      </ReactModal>
    );
  }
}
