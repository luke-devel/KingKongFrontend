import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <meta name="image" property="og:image:secure_url" content="https://kingkongbackups.com/img/logo.png"/>
        <meta name="title" property="og:title" content="King Kong Backups"/>
        <meta name="description" property="og:description" content="Securely backup your websites."/>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ fontFamily: "Roboto" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
