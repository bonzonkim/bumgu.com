import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                What's good y'all
                <br/>
                I'm a Web developer and a Beatboxer based in Seoul, Korea.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bumgu Kang 
                    </Heading>
                    <p>
                        한국어🇰🇷, English🇨🇦, 廣東話🇭🇰
                    </p>
                </Box>
                <Box 
                    flexShrink={0}
                    mt={{base: 4, md:0}}
                    ml={{md:4}}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/HealthyFlower.jpg" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                </Heading>
                <Paragraph>Bumgu is a Web developer based in Seoul, Korea
                           Very passionate blahblah  
                    called {' '}
                    <NextLink href="/works/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>


            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Seoul (서울), Korea
                </BioSection>
                <BioSection>
                <BioYear>연도</BioYear>
                이력 적기
                </BioSection>
            </Section>
        </Container>
    )
}
export default Page
