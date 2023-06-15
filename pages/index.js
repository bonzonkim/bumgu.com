import { Container , Box, Heading, useColorModeValue} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Section from '../components/section'
const Page = () => {
    return (
        <container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                What's good y'all
                <br/>
                I'm a Web developer and a Beatboxer based in Seoul, Korea.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bumgu Kang 
                        <br/>
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
                        borderSTyle="solid"
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
                <p>Paragraph</p>
            </Section>
        </container>
    )
}
export default Page
