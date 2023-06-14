import { Box,Container } from '@chakra-ui/react'
import NavBar from '../navbar.js'
import Head from 'next/head'

const Main = ({ children, router})=> {
    return (
    <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kelly b9 Bumgu - HomePage</title>
            </Head>
            <NavBar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
