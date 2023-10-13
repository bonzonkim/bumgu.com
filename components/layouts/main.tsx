import { Box, Container } from '@chakra-ui/react';
import NavBar from '../navbar';
import Head from 'next/head';
import NoSsr from '../no-ssr';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bumgu Kelly Kang</title>
        <link rel="icon" href="/favicons/favico.ico" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
