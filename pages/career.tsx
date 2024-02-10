import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { CareerSection, CareerParagraph } from '../components/career';
import { CareerGridItem } from '../components/grid-item';
import React from 'react';
import Layout from '../components/layouts/article';
import { CareerGridItemProps, CareerParagraphTypes } from '../types/types';
import { careerEventData, careerParagraphData } from '../data/careers/careerData';


export const getStaticProps = () => {

  return {
    props: {
      careerEventData,
      careerParagraphData,
    },
  };
};

const Career = ({ careerEventData, careerParagraphData }) => {
  return (
    <Container>
      <Section>
        <Heading as="h3" variant="section-title">
          Previous Works / 이전에 했던 일
        </Heading>
        {careerParagraphData.map(
          (item: CareerParagraphTypes, index: number) => (
            <CareerSection key={index}>
              <CareerParagraph key={index}>
                {item.korean}
                <br />
                {item.english}
                <br />
              </CareerParagraph>
            </CareerSection>
          ),
        )}
      </Section>

      <Heading as="h3" variant="section-title">
        Hosted Events
      </Heading>
      <Layout title="career">
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {careerEventData.map((item: CareerGridItemProps, index: number) => (
            <Section key={index}>
              <CareerGridItem
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                description={item.description}
                id={index + 1}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Layout>
    </Container>
  );
};

export default Career;
