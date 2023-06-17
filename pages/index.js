import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
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
                    <Box
                        borderColor="cornflowerblue"
                        borderWidth={2}
                        borderStyle="solid"
                        w="130px"
                        h="130px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                      >
                        <ProfileImage
                          src="/images/bumgu.jpg"
                          alt="Profile image"
                          borderRadius="full"
                          width="130"
                          height="130"
                        />
          </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                </Heading>
                <Paragraph>Bumgu is a Web developer based in Seoul, Korea
                           Very passionate blahblah  
                    called {' '}
                    <NextLink href="/works/lively">
                        <Link>Lively</Link>
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
                        <BioYear>2017</BioYear>
                        Graduated from Seoul Information Technology High School 
                        서울 아이티 고등학교 졸업
                    </BioSection>
                    <BioSection>
                        <BioYear>2017 ~ 2019</BioYear>
                        Worked at Gwanggaeto Samulnori as a Beatbox Performer and freelance Beatbox Artist
                        광개토 사물놀이 예술단 비트박서, 프리랜서 비트박서
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 ~ 2021</BioYear>
                        Mandatory military service at 25th Division Armyband as Beatboxer,Trombonist 
                        25사단 군악대 (비트박서, 트럼보니스트)
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Worked at Dobong-gu office as street culture Event manager&organizer
                        도봉구청 서울시 뉴딜 일자리 문화공간 및 이벤트 기획,운영 근무 
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 ~ 2022</BioYear>
                        Moved to Canada Worked at liqure store and Korean fast-food as Cashier and Customer Service, sub-cook 
                        캐나다 이주, 리쿼스토어, 한국 패스트 푸드점 고객응대,서브쿡,캐셔 근무  
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 ~ 2023</BioYear>
                        Finishied from KH Information Technology Academy (Java,Spring Backend)
                        KH 정보 교육원 수료 (자바,스프링 백엔드 과정)
                    </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                  I ♥
                </Heading>
                <Paragraph>
                  Music,{' '}
                  , Playing Bass Guitar,Trombone{' '}
                  And, Code 
                </Paragraph>
          </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                  On the web
                </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/bonzonkim" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    @bonzonkim
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/b9beatbox" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                  >
                    @b9beatbox
                  </Button>
                </Link>
              </ListItem>
            </List>
        </Section>
        </Container>
    )
}
export default Page
