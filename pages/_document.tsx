import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../libs/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="type" content="website" />
        <meta name="title" content="Software Developer" />
        <meta
          name="description"
          content="Software Developer based in Seoul, Korea"
        />
        <meta name="url" content="https://bumgu.com" />
        <meta name="locale" content="en-US" />
        <meta name="author" content="Bumgu Kang"/>
        <meta name="keywords" content="Web, Web Developer, Seoul Developer, Java, Javascript"/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
