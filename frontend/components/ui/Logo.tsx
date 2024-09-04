"use client"

import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img{
    transform: rotate(30deg);
}
`

const Logo = () => { 
    const footPrintImg:string = `/icons/money-bag.png`

    return (
        <Link href="/" className="cursor-pointer">
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo" />
                    <Text 
                        fontWeight="bold"
                        ml={3}
                        color={"light_brown"}
                    >
                            Budget Tracker
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo;

