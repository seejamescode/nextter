import fetch from "isomorphic-unfetch";
import Router from "next/router";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Details from "./Details";
import { POST } from "../common-types";

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
      >
        <button onClick={() => this.clearPost()}>Close</button>
        <Details post={post} comments={this.state.comments} noLink={true} />
      </ReactModal>
    );
  }
}
