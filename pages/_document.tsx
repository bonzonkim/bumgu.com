import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../libs/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software Developer" />
        <meta
          property="og:description"
          content="Software Developer based in Seoul, Korea"
        />
        <meta property="og:url" content="https://bumgu.com" />
        <meta property="og:locale" content="en-US" />

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
