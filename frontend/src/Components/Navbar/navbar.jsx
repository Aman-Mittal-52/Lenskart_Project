import React from 'react';

import {
    Box,
} from '@chakra-ui/react';

// Components
import TopNav from './top_navbar/top_nav';
import MobileTopNav from './top_navbar/mobile_top_nav';
import PrimaryNav from './primary_navbar/primary_nav';


// Navbar Component
function Navbar() {

    return (
        <Box>
            {/* Mobile View */}
            <MobileTopNav />

            {/* Desktop View */}
            <Box px={[7, 5, 6, 7]}>
                <TopNav />
                <PrimaryNav />
            </Box>
        </Box>
    );
}

export default Navbar;
