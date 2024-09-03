import React from 'react'
import {
    Box,
    Divider,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react'


import FooterSection from './footer_section'
import FooterAppSection from './footer_app_section'
import FooterSocialSection from './footer_social_section'

function Footer() {
    return (
        <Box
            className='footer'
            bg='#000042'
            color='#FFF'
            px={[6, 8, 10, 16]}
            py={[2, 3, 6, 8]}>

            <Flex
                justify='space-between'
                flexDirection={{ base: 'column', md: 'row' }}>

                <Flex justify='space-between'>

                    <FooterSection
                        heading='Services'
                        textArray={[
                            'Store Locator',
                            'Buying Guide',
                            'Frame Size'
                        ]} />

                    <FooterSection
                        heading='About Us'
                        textArray={[
                            'We Are Hiring',
                            'Refer And Earn',
                            'About Us',
                            'Lenskart Coupons'
                        ]} />

                    <FooterSection
                        heading='Help'
                        textArray={[
                            "FAQ's"
                        ]} />

                </Flex>

                <FooterAppSection />

            </Flex>

            <Divider bg='white' />
            
            <FooterSocialSection />
        </Box>
    )
}

export default Footer