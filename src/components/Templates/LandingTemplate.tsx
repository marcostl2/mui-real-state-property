import { Box } from '@mui/material';
import React from 'react';

import HeroSection from '../HeroSection';
import Header from '../Header';
import { BoxStyle } from './LandingTemplateStyle';

export default function LandingTemplate() {
  return (
    <Box style={BoxStyle}>
      <Header />
      <HeroSection />
    </Box>
  );
}
