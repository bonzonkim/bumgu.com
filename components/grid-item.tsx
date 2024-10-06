import Image from 'next/image';
import { Box, Text, Center } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { WorkGridItemProps, CareerGridItemProps } from '../types/types';


export const ProjectGridItem = ({
  title,
  thumbnail,
  gitRepo,
  skills,
  description,
}: WorkGridItemProps) => (
  <Center>
    <Box w="100%">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        onClick={() =>
          window.open(`https://github.com/bonzonkim/${gitRepo}`, '_blank')
        }
      />
      <Text
        mt={2}
        fontSize={20}
        className="grid-item-text"
        onClick={() =>
          window.open(`https://github.com/bonzonkim${gitRepo}`, '_blank')
        }
      >
        {title}
      </Text>
        {skills.map((skill, idx, arr) => (
        <span key={idx}>{skill}{idx < arr.length-1 && ', '}</span>
        ))}
      <Text fontSize={14}>{description}</Text>
    </Box>
  </Center>
);

export const CareerGridItem = ({
  title,
  thumbnail,
  description,
}: CareerGridItemProps) => (
  <Center>
    <Box w="100%">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>{description}</Text>
    </Box>
  </Center>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
            cursor: pointer;
        }
        .grid-item-text {
            cursor: pointer;
        }
  `}
  />
);
