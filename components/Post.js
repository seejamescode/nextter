import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import Anchor from "./Anchor";
import { POST } from "../common-types";

const gradientPalette = [
  "#70e1f5",
  "#ffd194",
  "#556270",
  "#FF6B6B",
  "#9D50BB",
  "#061161",
  "#B3FFAB",
  "#F0C27B"
];

const Container = styled.article`
  border-bottom: 1px solid var(--background--0);
  padding: var(--padding) 0;
  position: relative;

  :nth-last-child(1) {
    border-bottom: none;
  }
`;

const Content = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  outline: none;
  text-align: left;

  :before {
    content: "";
    height: 100%;
    left: -2rem;
    position: absolute;
    top: 0;
    width: calc(100% + 4rem);
    z-index: -1;
  }
  ${props =>
    props.noLink
      ? null
      : `
        :hover {
          :before {
            background: var(--background--3);
          }
        }

        :focus {
          :before {
            outline: 0.25rem solid var(--text--focus);
            outline-offset: -0.25rem;
          }
        }

        :active {
          :before {
            outline-color: var(--text--active);
          }
        }
      `};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.75rem 0 0.35rem 0;
`;

const UserName = styled(Anchor)`
  color: var(--text);
  display: inline-block;
  position: relative;
  transform: translateX(2.5rem);

  :before {
    background: linear-gradient(
      to left,
      ${props => gradientPalette[props.interval]},
      ${props => gradientPalette[props.interval + 1]} 110%
    );
    border-radius: 50%;
    content: "";
    height: 2rem;
    left: -2.5rem;
    position: absolute;
    top: -0.45rem;
    width: 2rem;
  }
`;

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

    // Cheap way to assign fake graidents to specific users
    // Does not work if the user count gets too large
    let interval = (user.id + 1) % gradientPalette.length;
    interval = interval === gradientPalette.length - 1 ? 0 : interval;

    return (
      <Container>
        <Link as={`/user/${user.id}`} href={`/user?id=${user.id}`}>
          <UserName href={`/user?id=${user.id}`} interval={interval}>
            {user.name}
          </UserName>
        </Link>
        <Content
          noLink={this.props.noLink}
          onClick={noLink ? null : e => this.showModal(e, id)}
        >
          <Title>{title}</Title>
          <p>{body}</p>
        </Content>
      </Container>
    );
  }
}
