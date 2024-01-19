import Image, { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Center } from '@chakra-ui/react';
import { Global } from '@emotion/react';

// export const GridItem = ({ children, href, title, thumbnail }) => (
//   <Center>
//     <Box w="100%">
//       <LinkBox cursor="pointer">
//         <Image
//           src={thumbnail}
//           alt={title}
//           className="grid-item-thumbnail"
//           placeholder="blur"
//           loading="lazy"
//         />
//         <LinkOverlay href={href} target="_blank">
//           <Text mt={2}>{title}</Text>
//         </LinkOverlay>
//         <Text fontSize={14}>{children}</Text>
//       </LinkBox>
//     </Box>
//   </Center>
// );

interface GridItemProps {
  children: string;
  title: string;
  thumbnail: StaticImageData;
}

export const ProjectGridItem = ({
  children,
  title,
  thumbnail,
}: GridItemProps) => (
  <Center>
    <Box w="100%">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        onClick={() =>
          window.open(`https://github.com/bonzonkim/${title}`, '_blank')
        }
      />
      <Text
        mt={2}
        fontSize={20}
        className="grid-item-text"
        onClick={() =>
          window.open(`https://github.com/bonzonkim${title}`, '_blank')
        }
      >
        {title}
      </Text>
      <Text fontSize={14}>{children}</Text>
    </Box>
  </Center>
);
export const CareerGridItem = ({
  children,
  title,
  thumbnail,
}: GridItemProps) => (
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
      <Text fontSize={14}>{children}</Text>
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
