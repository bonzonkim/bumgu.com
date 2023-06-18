import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbnailLively from '../public/images/works/Lively_main.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        <Section>
          <WorkGridItem id="lively" title="Lively" thumbnail={thumbnailLively}>
            Lively is a Web application built with Java and Spring framework.
            this Web application has a Map that provides real-time traffic
            information depends on your location. also has a 6 kind of article
            pages that you can just write and view instantly.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};
export default Works;
