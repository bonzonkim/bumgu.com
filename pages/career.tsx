import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { CareerSection, CareerParagraph } from '../components/career';
import { CareerGridItem }from '../components/grid-item';
import React from 'react';
import Layout from '../components/layouts/article';

import thumbnailBeatboxChallenge from '../public/images/career/beatboxChallenge2020.png';
import thumbnailBeatboxCamp from '../public/images/career/beatboxcamp2019.jpg';
import thumbnailKbc2018 from '../public/images/career/kbc2018.png';
import thumbnailKbc2019 from '../public/images/career/kbc2019.jpg';
import thumbnailMom2019 from '../public/images/career/mom2019.jpg';
import thumbnailMom2019_2 from '../public/images/career/mom2019_2.jpg';


const Career = () => {
    return (
        <Container>
          <Section>
            <Heading as="h3" variant="section-title">
                Previous Works / 이전에 했던 일
            </Heading>
                <CareerSection>
                    <CareerParagraph>
                       • 미국 LA Korean cultural center 비트박스 공연
                        <br/>
                        Perform at Los Angeles,U.S.A Korean Cultural Center
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 서울 국립 민속 박물관 비트박스 초청 공연
                        <br/>
                        Perform at Seoul Museum of History 
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • OPCD M.O.M 워크샵 비트박스 강연
                        <br/>
                        Beatbox Workshop at OPCD 
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 국회의사당 비트박스 초청 공연
                        <br/>
                        Perform at National Assembly of Korea
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 국립국악원 비트박스 초청 공연
                        <br/>
                        Perform at National Gugak Center 
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • KBS 열린 음악회 비트박스 공연
                        <br/>
                        Perform at KBS
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 서울시 국악 한마당 비트박스 초청 공연
                        <br/>
                        Perform at Seoul Gugak Hanmadang 
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 강북구 뮤지컬 신옹고집전 출연
                        <br/>
                        Perform in Musical "Sin ong go jip jeon" 
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 강동아트센터 시니어 어울림 페스티벌 공연
                        <br/>
                        Perform at Gwangdong Arts Center Senior Center
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 경기문화재단 초청 비트박스 공연
                        <br/>
                        Perform at Gyeonggi Cultural Foundation
                    </CareerParagraph>
                </CareerSection>
                <CareerSection>
                    <CareerParagraph>
                       • 태국 방콕 Korea Cultuer Scene 비트박스 공연 
                        <br/>
                        Perform at Korea Culture Scene in Bangkok, Thailand 
                    </CareerParagraph>
                </CareerSection>

          </Section>


                <Heading as="h3" variant="section-title">
                    Hosted Events
                </Heading>
                <Layout title="career">
                   <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section>
                          <CareerGridItem
                            title="KBC2018"
                            thumbnail={thumbnailKbc2018}
                          >
                          </CareerGridItem>
                        </Section>
                        <Section>
                          <CareerGridItem
                            title="KBC2019"
                            thumbnail={thumbnailKbc2019}
                          >
                          </CareerGridItem>
                        </Section>
                        <Section>
                          <CareerGridItem
                            title="Mom2019 Vol.1"
                            thumbnail={thumbnailMom2019}
                          >
                          </CareerGridItem>
                        </Section>
                        <Section>
                          <CareerGridItem
                            title="Mom2019 Vol.2"
                            thumbnail={thumbnailMom2019_2}
                          >
                          </CareerGridItem>
                        </Section>
                        <Section>
                          <CareerGridItem
                            title="BeatboxCamp"
                            thumbnail={thumbnailBeatboxCamp}
                          >
                          </CareerGridItem>
                        </Section>
                        <Section>
                          <CareerGridItem
                            title="OPCD Beatbox Challenge"
                            thumbnail={thumbnailBeatboxChallenge}
                          >
                          </CareerGridItem>
                        </Section>
                    </SimpleGrid>
                </Layout>
        </Container>
    );
};
export default Career;
