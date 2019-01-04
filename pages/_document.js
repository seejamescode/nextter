import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // This snippet will collect all of page’s critical CSS
  // while the is being server-side rendered
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Performance: Inject the page’s critical CSS in the <head> tag */}
          {this.props.styleTags}

          {/* Progressive Web App: Match the width of app’s content with width of viewport for mobile devices */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Progressive Web App: Have address bar match brand colors */}
          <meta name="theme-color" content="#B90504" />

          {/* Progressive Web App: Provide manifest file for metadata */}
          <link rel="manifest" href="./static/manifest.json" />

          {/* SEO: App description for search-engine optimization */}
          <meta
            name="Description"
            content="A Twitter-like sample app with a perfect Google Lighthouse score."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
