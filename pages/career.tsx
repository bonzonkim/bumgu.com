import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';
import thumbnailLively from '../public/images/works/Lively_main.png';
import React from 'react';

const Career = () => {
    return (
        <Container>
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Previous Works
            </Heading>
                <BioSection>
                    <BioYear>
                        미국 LA Korean cultural center 비트박스 공연
                        <br/>
                        Perform at Los Angeles,U.S.A Korean Cultural Center
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        서울 국립 민속 박물관 비트박스 초청 공연
                        <br/>
                        Perform at Seoul Museum of History 
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        OPCD M.O.M 워크샵 비트박스 강연
                        <br/>
                        Beatbox Workshop at OPCD 
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        국회의사당 비트박스 초청 공연
                        <br/>
                        Perform at National Assembly of Korea
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        국립국악원 비트박스 초청 공연
                        <br/>
                        Perform at National Gugak Center 
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        KBS 열린 음악회 비트박스 공연
                        <br/>
                        Perform at KBS
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        서울시 국악 한마당 비트박스 초청 공연
                        <br/>
                        Perform at Seoul Gugak Hanmadang 
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        강북구 뮤지컬 신옹고집전 출연
                        <br/>
                        Perform in Musical "Sin ong go jip jeon" 
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        강동아트센터 시니어 어울림 페스티벌 공연
                        <br/>
                        Perform at Gwangdong Arts Center Senior Center
                    </BioYear>
                </BioSection>
                <BioSection>
                    <BioYear>
                        경기문화재단 초청 비트박스 공연
                        <br/>
                        Perform at Gyeonggi Cultural Foundation
                    </BioYear>
                </BioSection>
          </Section>
        </Container>
    );
};
export default Career;
