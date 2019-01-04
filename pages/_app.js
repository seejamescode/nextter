import App, { Container } from "next/app";
import Nav from "../components/Nav";

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
      <Container>
        <Nav />
        <main>
          <Component {...pageProps} router={router} />
        </main>
      </Container>
    );
  }
}
