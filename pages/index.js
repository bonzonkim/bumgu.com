import { Container , Box, Heading} from '@chakra-ui/react'
const Page = () => {
    return (
        <container>
            <Box borderRadius="lg" bg="#046A38" p={3} mb={6} align="center">
                What's good y'all
                <br/>
                I'm a full-stack developer and a Beatboxer based in Seoul, Korea.
                <br/>
                한국어🇰🇷, English🇨🇦, 廣東話🇭🇰
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kelly's Homepage
                    </Heading>
                    <p></p>
                </Box>
            </Box>
        </container>
    )
}
export default Page
