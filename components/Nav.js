import Link from "next/link";
import styled from "styled-components";
import Anchor from "./Anchor";

const Container = styled.nav`
  background: var(--background--0);
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 var(--padding);
`;

const Credits = styled(Anchor)`
  margin: 0.5rem 0;
`;

const H1 = styled.h1`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Nav = () => (
  <Container>
    <Content>
      <Link as={`/`} href={`/`}>
        <H1>
          <Anchor href="/" onClick={e => e.target.blur()}>
            Nextter
          </Anchor>
        </H1>
      </Link>
      <Credits
        href="https://twitter.com/seejamescode"
        rel="noopener noreferrer"
        target="_blank"
      >
        James Y Rauhut
      </Credits>
    </Content>
  </Container>
);

export default Nav;
