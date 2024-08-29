import React, { useState } from 'react'

import {
    Box,
    Input,
    Text,
    Collapse,
    Divider,
} from '@chakra-ui/react';


function LenskartNavearchbar() {

    // Collapse State
    const [isCollapsed, setCollapse] = useState(false)

    // handleCollapse function
    const handleCollapse = (condition, e) => {
        setCollapse(condition)
        if (e.target.value) {
            setCollapse(false)
        }
    };

    // Array of search suggestions
    const collapseText = [
        "EyeGlasses",
        "SunGlasses",
        "Contact lenses",
        "Vincent Chase EyeGlasses",
        "Vincent Chase SunGlasses",
        "John Jacobs EyeGlasses",
        "John Jacobs SunGlasses",
        "Men SunGlasses",
        "Women SunGlasses",
        "Aviator",
        "Eyewear Accesories",
        "Purevision",
        "Acuvue",
        "Eye Checkup"
    ];

    return (
        <Box position={'relative'}>

            {/* Search Input */}
            <Input
                placeholder={'What are you looking for?'}
                onChange={(e) => { handleCollapse(true, e) }}
                onFocus={() => { handleCollapse(true) }}
                onBlur={() => { handleCollapse(false) }}
                w={['100%', '350px', '200px', '500px']}
                borderColor={'#000042'} />


            {/* Search Suggestions */}
            <Box
                w={'100%'}
                position={'absolute'}
                display={isCollapsed ? "block" : "none"}
                px={'10px'}
                py={'15px'}
                bg={'#fff'}
                border={'1px solid white'}
                borderRadius={'10px'}
                borderTopRadius={0} >

                {/* Collapse-Box */}
                <Collapse in={isCollapsed} >
                    <Text fontSize={{ md: '15px', lg: "20px" }} fontWeight={'bold'}>Trending Search</Text>
                    <Divider />

                    {collapseText.map((text, index) => (
                        <Text
                            key={index}
                            fontSize={{ base: "10px" }}
                            my={2}
                            onClick={() => { handleCollapse(false) }}>
                            {text}
                        </Text>
                    ))}

                </Collapse>

            </Box>

        </Box>
    )
}

export default LenskartNavearchbar