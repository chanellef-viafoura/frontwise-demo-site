import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta name="vf:domain" content="frontwise-demo-site.vercel.app" />
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            async
            src="//cdn.viafoura.net/front/0.0.22-PR-41-21-16-fdbf8b5/index.js"
          ></script>
        </body>
      </Html>
    );
  }
}
