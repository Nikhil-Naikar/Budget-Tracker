'use client'

import NextLink from "next/link";
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react';
import Logo from "./ui/Logo";

interface listitems_Props{
    href:string,
    path:string,
    children: React.ReactNode
}

interface navbar_props{
    path: string
}

const LinkItem = (props:listitems_Props) => {
    const { href, path, children} = props;
    const active:boolean = path == href;

    
    return (
        <NextLink href={href}>
            <Box
                as="span"
                p={2}
                color={active ? 'transparent' : 'light_brown'}
            >
                {children}
            </Box>
        </NextLink>
    )
}

const NavBar = (props:navbar_props) => {
    const { path } = props;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set a flag indicating the component is mounted on the client
        setIsMounted(true);
    }, []);

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: 'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md"
                justifyContent={"space-between"}
                textAlign="center"
                flexWrap={"wrap"}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                {isMounted && (
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        display={{ base: "none", md: "flex" }}
                        width={{ base: "full", md: "auto" }}
                        alignItems="center"
                        flexGrow={0.25}
                        mt={{ base: 4, md: 0 }}
                    >
                        <LinkItem href="/add-expense" path={path}>
                            Add Expense
                        </LinkItem>
                        <LinkItem href="/history" path={path}>
                            History
                        </LinkItem>
                        <LinkItem href="/settings" path={path}>
                            Settings
                        </LinkItem>
                    </Stack>
                )}
                {/* <Box flex={1} textAlign="right">
                    {isMounted && (
                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem>About</MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem>Works</MenuItem>
                                    </NextLink>

                                </MenuList>
                            </Menu>
                        </Box>
                    )}
                </Box> */}
            </Container>
        </Box>
    )
}

export default NavBar;



