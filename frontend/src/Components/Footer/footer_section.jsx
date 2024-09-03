import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'

function FooterSection({ heading, textArray }) {
    return (
        <Box>

            <Heading
                fontSize={['sm', 'md', 'lg', 'xl']}
                fontWeight='medium'>
                {heading}
            </Heading>

            <>
                {textArray && textArray.map((text, i) => {
                    return (
                        <Text
                            key={i} my={[2, 4, 5, 6]}
                            mr={[2, 4, 6, 20]}
                            fontSize={['xs', '0.5rem', '0.75rem', 'sm']}>
                            {text}
                        </Text>
                    )
                })}
            </>

        </Box>
    )
}

export default FooterSection