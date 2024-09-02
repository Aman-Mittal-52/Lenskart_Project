import { Box, Flex, Image, Show } from '@chakra-ui/react'
import React from 'react'
import tryon3d from "../../../assets/tryon3d.webp"
import blulogo from "../../../assets/blulogo.webp"
import gold_max_logo from "../../../assets/gold_max_logo.webp"
import CategoryCollapse from './category_collapse'
import Imagebox from './image_box'

function ProductCategoryNav() {
    return (
        <Show above='md'>
            <Flex
                mt={3}
                px={[7, 5, 6, 7]}
                bg={'#FBF9F7'}
                justify={'space-between'}
                align={'center'}>
                <Flex justify={'space-around'}>
                    <CategoryCollapse text='eyeglasses' />
                    <CategoryCollapse text='screen glasses' />
                    <CategoryCollapse text='kids glasses' />
                    <CategoryCollapse text='contact lenses' />
                    <CategoryCollapse text='sunglasses' />
                    <CategoryCollapse text='home eye-test' />
                    <CategoryCollapse text='store locator' />
                </Flex>
                <Flex>
                <Imagebox image={tryon3d} alt='3d_trial' />
                <Imagebox image={blulogo} alt='blu_logo' />
                <Imagebox image={gold_max_logo} alt='gold_max_logo' />
                </Flex>
            </Flex>
        </Show>
    )
}

export default ProductCategoryNav