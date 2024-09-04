"use client";

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

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: 'blur(10px'}}
            zIndex={1}
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

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    justifyContent="flex-end"
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
        
                <Box textAlign="right" mr={5} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Options" bg={'light_brown'}/>
                        <MenuList bg={'light_brown'}>
                            <NextLink href="/add-expense">
                                <MenuItem bg={'light_brown'} _hover={{ border: "1px solid white" }}>Add Expense</MenuItem>
                            </NextLink>
                            <NextLink href="/history">
                                <MenuItem bg={'light_brown'} _hover={{ border: "1px solid white" }}>History</MenuItem>
                            </NextLink>
                            <NextLink href="/settings">
                                <MenuItem bg={'light_brown'} _hover={{ border: "1px solid white" }}>Settings</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;



