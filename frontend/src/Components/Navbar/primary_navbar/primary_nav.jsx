import React, { useState } from 'react'
import {
    Show,
    Box,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react'

// SVG Icons
import { FiShoppingBag, FiHeart } from "react-icons/fi";

// Components
import LenskartNavearchbar from './lenskart_nav_searchbar';
import PrimaryNavIconWithText from './primary_nav_icon_with_text';


function PrimaryNav() {

    return (
        <Show above='md'>
            <Flex align={'center'} justify={'space-between'}>

                {/* Logo */}
                <Box w={['100px', '120px', '130px', '180px']}>
                    <Image w={'100%'} src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' alt='lenskart logo' />
                </Box>

                {/* Toll Free AD */}
                <Box w={['90px', '100px', '110px', '120px']} display={{ md: "none", lg: "block" }}>
                    <Image w={'100%'} src='https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png' alt='toll-free-number' />
                </Box>

                {/* Search Input */}
                <LenskartNavearchbar />


                <Text className='navbar_primary_text' fontWeight={'thin'}>Track order</Text>
                <Text className='navbar_primary_text' fontWeight={'thin'}>Sign In & Sign Up</Text>

                {/* Icons */}
                <PrimaryNavIconWithText text='Wishlist' Icon={FiHeart} />
                <PrimaryNavIconWithText text='Cart' Icon={FiShoppingBag} />

            </Flex>

        </Show>
    )
}

export default PrimaryNav