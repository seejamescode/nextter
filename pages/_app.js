import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    --background--0: #DDDDDD;
    --background--1: #E9E9E9;
    --background--2: #F6F6F6;
    --background--3: #FFF;
    --text: #000;
    --text--hover: #B90504;
    --text--focus: #B90504;
    --text--active: #990100;
    --padding: 2rem;
    --max-width: 50rem;
  }

  body {
    background: var(--background--1);
    margin: 0;
  }

  a, button, h1, h2, h3, h4, p {
    color: var(--text);
    font-family: 'PT Sans', sans-serif;
    margin: 0;
    text-decoration: none;
  }

  /* Prevent scrolling on parent when modal is open
  Source: https://github.com/reactjs/react-modal/issues/191 */
  .ReactModal__Body--open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--padding);
`;

export default class Nextter extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Nextter</title>
        </Head>
        <Container>
          <Nav />
          <Main>
            <Component {...pageProps} router={router} />
          </Main>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
