import Logo from './logo';
import NextLink from 'next/link';

import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  return <NextLink href={href}>{children}</NextLink>;
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyItems="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            href="https://github.com/bonzonkim/kellyb9-homepage"
            path={path}
          >
            Sources
          </LinkItem>
          <LinkItem href="/career" path={path}>
            Career
          </LinkItem>
        </Stack>

        <Box flex={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem href="/" as={NextLink}>
                  About me
                </MenuItem>
                <MenuItem href="/projects" as={NextLink}>
                  Projects
                </MenuItem>
                <MenuItem
                  href="https://github.com/bonzonkim/kellyb9-homepage"
                  as={NextLink}
                >
                  Sources
                </MenuItem>
                <MenuItem href="/career" as={NextLink}>
                  Career
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Navbar;
