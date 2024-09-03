import React from 'react'

import { Box, Flex, Image, Text } from '@chakra-ui/react'

import play_store from '../../assets/footer/play_store.svg'
import app_store from '../../assets/footer/app_store.svg'

function FooterAppSection() {
    return (
        <Box p={[2, 3, 4, 5]}>

            <Flex w={'100%'} justify='center' flexDirection={{ base: 'column', md: 'column', lg: 'row' }} align='center'>
                <Image src={play_store} w='40%' p='2' />
                <Image src={app_store} w='40%' p='2' />
            </Flex>

            <Box textAlign='center'>
                <Text fontSize={['10px', 'sm', 'md', 'lg']} mt={[2, 4, 5, 6]}>Download Lenskart App to buy</Text>
                <Text fontSize={['10px', 'sm', 'md', 'lg']} >Eyeglasses, Sunglasses and Contact Lenses</Text>
            </Box>

        </Box>
    )
}

export default FooterAppSection