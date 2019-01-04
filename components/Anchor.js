import styled from "styled-components";

const Anchor = styled.a`
  outline: none;

  :hover {
    color: var(--text--hover);
  }

  :focus {
    color: var(--text--focus);
  }

  :active {
    color: var(--text--active);
  }
`;

export default Anchor;
