import { Box, Container } from '@chakra-ui/react';
import NavBar from '../navbar';
import Head from 'next/head';
//import NoSsr from '../no-ssr';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Bumgu Kang | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software Developer" />
        <meta
          property="og:description"
          content="Software Developer based in Seoul, Korea"
        />
        <meta property="og:url" content="https://bumgu.com" />
        <meta property="og:locale" content="en-US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
