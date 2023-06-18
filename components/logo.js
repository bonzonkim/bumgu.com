//import Link from 'next/link'
//import Image from 'next/image'
//import { Text, useColorModeValue } from '@chakra-ui/react'
//import styled from '@emotion/styled'
//import { useEffect, useState } from 'react'
//
//const LogoBox = styled.span`
//font-weight: bold;
//font-size: 18px;
//display: inline-flex;
//align-items: center;
//height: 30px;
//line-height: 20px;
//padding: 10px;
//
//&:hover img{
//    transform: rotate(20deg);
//}
//`
//
//const Logo = () => {
//    const [color, setColor] = useState('')
//    const footPrintImg = `/public/images/${useColorModeValue('', '-dark')}.jpeg`
//
//return (
//        <Link href="/">
//        <LogoBox>
//        <Image src={footPrintImg} width={20} height={20} alt="footprint" />
//        <Text color={useColorModeValue('gray.800','whiteAlpha.900')}
//              fontFamily='M PLUS Rounded 1c'
//              fontWeight='bold'
//              ml={3}>
//              Bumgu  Kelly Kang
//        </Text>
//        </LogoBox>
//        </Link>
//       )
//}
//
//export default Logo
//copied from Takuya
import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import FootprintIcon from './icons/footprint';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false} passHref legacyBehavior>
      <a>
        <LogoBox>
          <FootprintIcon />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Bumgu Kelly Kang
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
