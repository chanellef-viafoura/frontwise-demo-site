import Document, { Head, Html, Main, NextScript } from "next/document";

import { cdnUrl } from "@/graphql/cdnUrl";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    
    const data = await fetchGraphQL({
      query: cdnUrl,
    });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, cdnURL: data.cdnurl.url }
  }

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
            src={this.props.cdnURL}
          ></script>
        </body>
      </Html>
    );
  }
}
