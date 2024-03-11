import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Center,
} from '@chakra-ui/react';
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Section from '../components/section';
import Image from 'next/image';
import React from 'react';
import ProfileBumgu from '@/public/bumgu.jpg';
import { GrOracle, GrMysql } from 'react-icons/gr';
import {
  SiNextdotjs,
  SiVim,
  SiSpringboot,
  SiCss3,
  SiHtml5,
  SiSplunk,
  SiTypescript,
  SiJavascript,
  SiInstagram,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';
import { FaJava, FaReact, FaNode, FaNodeJs } from 'react-icons/fa';
import { IoBookOutline } from "react-icons/io5";

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" size="xl">
            강범구 Bumgu Kang
          </Heading>
          <Heading as="h4" size="md">
            Software Engineer
          </Heading>
          <p>한국어🇰🇷, English🇨🇦</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 4 }}
          alignItems="center"
        >
          <Box
            borderColor="gray.200"
            borderWidth={2}
            borderStyle="solid"
            w="130px"
            h="130px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={ProfileBumgu}
              alt="Profile image"
              width={130}
              height={130}
              priority={true}
            />
          </Box>
        </Box>
      </Box>
      <Section>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>안녕하세요.소프트웨어 엔지니어 강범구 입니다.</Paragraph>
        <Center>
          <Box my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects :)
              </Button>
            </NextLink>
          </Box>
        </Center>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          서울 출생
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          서울 아이티 고등학교 전자통신과 졸업
        </BioSection>
        <BioSection>
          <BioYear>2017 ~ 2019</BioYear>
          프리랜서 비트박서
        </BioSection>
        <BioSection>
          <BioYear>2019 ~ 2021</BioYear>
          25사단 군악대 (비트박서, 트럼보니스트)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          도봉구청 서울시 뉴딜 일자리 문화공간 및 이벤트 기획,운영 근무
        </BioSection>
        <BioSection>
          <BioYear>2021 ~ 2022</BioYear>
          캐나다 워킹홀리데이, 리쿼스토어, 한국 패스트 푸드 고객응대, 서브쿡,
          캐셔 근무
        </BioSection>
        <BioSection>
          <BioYear>2022 ~ 2023</BioYear>
          KH 정보 교육원 수료 (자바,스프링 백엔드 과정)
        </BioSection>
        <BioSection>
          <BioYear>2023 Aug ~ 2023 Oct</BioYear>
          씨에스라크 소프트웨어(Splunk) 엔지니어 근무
        </BioSection>
        <BioSection>
          <BioYear>2024 Feb ~ Present</BioYear>
          스탠다드네트웍스 시스템 엔지니어 / DevOps 엔지니어
        </BioSection>
        <Center>
          <Box my={4}>
            <NextLink href="/career">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My previous work career
              </Button>
            </NextLink>
          </Box>
        </Center>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Button variant="ghost" colorScheme="teal" leftIcon={<FaJava />}>
          Java
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiJavascript />}>
          JavaScript
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiTypescript />}>
          TypeScript
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<FaReact />}>
          React
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiVim />}>
          Vim
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiNextdotjs />}>
          Next.js
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<GrOracle />}>
          Oracle
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<GrMysql />}>
          MySQL
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiSpringboot />}>
          Spring
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiHtml5 />}>
          HTML
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiCss3 />}>
          CSS
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<FaNode />}>
          Node.js
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<FaNodeJs />}>
          Express
        </Button>
        <br />
        <Button variant="ghost" colorScheme="teal" leftIcon={<SiSplunk />}>
          Splunk
        </Button>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Paragraph>음악과 베이스기타 연주, 트럼본 연주</Paragraph>
        <Paragraph>last but not least, Code</Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          SNS
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://velog.io/@kellyb9/posts"
              target="_blank"
              as={NextLink}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoBookOutline />}
              >
                velog.io/@kellyb9
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/bonzonkim"
              target="_blank"
              as={NextLink}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiGithub />}
              >
                @bonzonkim
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/b9develope"
              target="_blank"
              as={NextLink}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiInstagram />}
              >
                @b9develope
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/bumgu"
              target="_blank"
              as={NextLink}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiLinkedin />}
              >
                Bumgu Kang
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <Paragraph>
          <NextLink href="mailto:flrhyme9@gmail.com" target="_blank">
            <Button leftIcon={<EmailIcon />} colorScheme="teal">
              flrhyme9@gmail.com
            </Button>
          </NextLink>
        </Paragraph>
      </Section>
    </Container>
  );
};
export default Page;
