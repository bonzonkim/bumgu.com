import { Container, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import React from 'react';
import Layout from '../components/layouts/article';
import { projectGridItemProps } from '../data/projects/projectData';
import { WorkGridItemProps } from '../types/types';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { projectGridItemProps },
  };
};

const Projects = ({ projectGridItemProps }) => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <Layout title="works">
        {projectGridItemProps.map((item: WorkGridItemProps, index: number) => (
          <Section key={index}>
            <ProjectGridItem
              title={item.title}
              thumbnail={item.thumbnail}
              gitRepo={item.gitRepo}
              description={item.description}
            />
          </Section>
        ))}
      </Layout>
    </Container>
  );
};

export default Projects;
