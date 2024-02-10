import { Box, Container } from '@chakra-ui/react';
import NavBar from '../navbar';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
//import NoSsr from '../no-ssr';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Bumgu Kang | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <SpeedInsights />
      </Container>
    </Box>
  );
};

export default Main;
