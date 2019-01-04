import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import { POST } from "../common-types";

export default class extends React.Component {
  static propTypes = {
    post: PropTypes.shape(POST)
  };

  showModal(e, id) {
    e.preventDefault();
    Router.push(`/?post=${id}`, `/post/${id}`, { shallow: true });
  }

  render() {
    const {
      noLink,
      post: { body, id, title, user }
    } = this.props;

    return (
      <article>
        <Link as={`/user/${user.id}`} href={`/user?id=${user.id}`}>
          <a>{user.name}</a>
        </Link>
        <button onClick={noLink ? null : e => this.showModal(e, id)}>
          <h3>{title}</h3>
          <p>{body}</p>
        </button>
      </article>
    );
  }
}
