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
import { BioSection, BioText, BioYear } from '../components/bio';
import Section from '../components/section';
import Image from 'next/image';
import React from 'react';
import ProfileBumgu from '@/public/bumgu.jpg';
import {
  SiVim,
  SiTypescript,
  SiJavascript,
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiPrometheus,
  SiGrafana,
  SiKubernetes,
  SiGnubash
} from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { FaGolang, FaTowerObservation, FaLinux } from 'react-icons/fa6';
import { IoBookOutline } from "react-icons/io5";
import { SkillSection, SkillSectionContent } from 'components/skill-section';

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
        <Paragraph>안녕하세요. Software Engineer | System Engineer 강범구 입니다.</Paragraph>
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
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2023 Aug ~ 2023 Nov</BioYear>
          <BioText>
            Internship at CSLAC (Splunk Engineer)
          </BioText>
        </BioSection>
        <BioSection>
          <BioYear>2024 Feb ~ Present</BioYear>
          <BioText>
            DevOps, SRE, System engineer at Standard Networks
          </BioText>
        </BioSection>
        <Center>
          <Box my={4}>
            <NextLink href="/career">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                I did this before became a Software Engineer :)
              </Button>
            </NextLink>
          </Box>
        </Center>
      </Section>

          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
      <SkillSection>
        <SkillSectionContent>
          <Heading as="h5" size="sm">
            Language
          </Heading>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiJavascript />}>
            JavaScript
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiTypescript />}>
            TypeScript
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<FaGolang />}>
            Go
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiGnubash />}>
            Shell Script
          </Button>
        </SkillSectionContent>
        <SkillSectionContent>
          <Heading as="h5" size="sm">
            DevOps, SRE
          </Heading>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiKubernetes />}>
            Kubernetes
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<FaDocker />}>
            Docker
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiPrometheus />}>
            Prometheus
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiGrafana />}>
            Grafana
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiGrafana />}>
            Loki
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiGrafana />}>
            Tempo
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<FaTowerObservation />}>
            Zabbix
          </Button>
        </SkillSectionContent>
        <SkillSectionContent>
          <Heading as="h5" size="sm">
            ETC
          </Heading>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiGithub />}>
            Github
          </Button>
          <Button variant="ghost" colorScheme="teal" leftIcon={<FaLinux />}>
            Linux
          </Button>
        </SkillSectionContent>
        <SkillSectionContent>
          <Heading as="h5" size="sm">
            My Favorite Editor
          </Heading>
          <Button variant="ghost" colorScheme="teal" leftIcon={<SiVim />}>
            NeoVim
          </Button>

        </SkillSectionContent>
      </SkillSection>

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
              href="https://blog.bumgu.com"
              target="_blank"
              as={NextLink}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoBookOutline />}
              >
                blog.bumgu.com
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
