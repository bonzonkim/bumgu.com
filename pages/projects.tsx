import { Container, Heading } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import React from 'react';
import Layout from '../components/layouts/article';
import thumbnailLively from '../public/images/works/Lively_main.png';
import thumbnailWhatCandy from '../public/images/works/whatCandy.png';
import thumbnailSpotify from '../public/images/works/know-your-spotify.png';

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <Layout title="works">
        <Section>
          <ProjectGridItem title="Lively" thumbnail={thumbnailLively} gitRepo="Lively">
            Lively는 지역 커뮤니티를 표방한 실시간 위치 기반 교통 상황을
            보여주는 맵이 있으며 기부, 질문 등 지역 커뮤니티에 필요한 게시판이
            있습니다.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem title="what candy" thumbnail={thumbnailWhatCandy} gitRepo="what-candy">
            응답에 따라 성격 유형을 탕후루에 비교해 분류하는 심리테스트 웹 앱
            입니다.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem title="know your Spotify" thumbnail={thumbnailSpotify} gitRepo="know-your-spotify">
            Spotify API를 이용해 유저의 최근 많이들은 노래와 아티스트를 보여주는 웹 앱 입니다.
          </ProjectGridItem>
        </Section>
      </Layout>
    </Container>
  );
};
export default Projects;
