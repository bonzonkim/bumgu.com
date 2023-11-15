import Link from 'next/link';
import { Text, useColorModeValue, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > Image {
    transition: 200ms ease;
  }

`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
        <LogoBox>
        <Image 
                src="/images/HealthyFlower.JPG"
                alt="logo"
                width={30}
                height={30}
                borderRadius="50%"
        />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Bumgu Kang
            </Text>
        </LogoBox>
    </Link>
  );
};

export default Logo;
