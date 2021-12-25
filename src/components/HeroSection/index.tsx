import { Box, Tabs, Tab, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

// import { LocationOnOutlinedIcon } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import {
  HeroSectionStyles,
  HouseImgStyles,
  SelectedTabStyles,
} from './HeroSectionStyles';

import house from '../../assets/images/house.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function HeroSection() {
  const matches = useMediaQuery('(min-width:1080px)');
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        style={{
          background: 'white',
          width: '100%',
          maxWidth: '840px',
          position: matches ? 'absolute' : 'relative',
          zIndex: 1000,
          top: matches ? 48 : 0,
          marginBottom: !matches ? 32 : 0,
          left: 0,
          borderRadius: '0 16px 16px 16px',
        }}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      </div>
    );
  }

  return (
    <Box
      component="section"
      sx={{ ...HeroSectionStyles, minHeight: '600px' }}
      pt={matches ? 11 : 4}
      px={matches ? 11 : 4}
      style={{ position: 'relative', borderRadius: '50px' }}
    >
      <Typography
        variant={matches ? 'h2' : 'h4'}
        mb={4}
        style={{ maxWidth: '700px', fontWeight: '600' }}
      >
        Easy way to find a perfect property
      </Typography>
      <Typography
        variant="h6"
        style={{ maxWidth: '500px' }}
        color="grey.500"
        fontWeight="400"
        mb={7}
      >
        We provide a complete service for the sale, purchase or rental of real
        estate.
      </Typography>
      <Box style={{ position: 'relative' }}>
        <Tabs
          TabIndicatorProps={{ style: { background: 'none' } }}
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="RENT"
            disableRipple
            sx={value === 0 ? SelectedTabStyles : {}}
          ></Tab>
          <Tab
            label="BUY"
            disableRipple
            sx={value === 1 ? SelectedTabStyles : {}}
          ></Tab>
          <Tab
            label="SELL"
            disableRipple
            sx={value === 2 ? SelectedTabStyles : {}}
          ></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                flexDirection="column"
                sx={{ borderRight: '1px solid lightGrey' }}
              >
                <Box
                  sx={{ typography: 'h6', fontWeight: 600, color: 'grey.700' }}
                >
                  Location
                </Box>
                <Box
                  sx={{ display: 'flex' }}
                  justifyContent="space-between"
                  pr={2}
                >
                  <Box sx={{ typography: 'body1', color: 'grey.500' }}>
                    Select your city
                  </Box>
                  <LocationOnOutlinedIcon sx={{ color: 'grey.500' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                flexDirection="column"
                sx={{ borderRight: '1px solid lightGrey' }}
              >
                <Box
                  sx={{ typography: 'h6', fontWeight: 600, color: 'grey.700' }}
                >
                  Property Type
                </Box>
                <Box
                  sx={{ display: 'flex' }}
                  justifyContent="space-between"
                  pr={2}
                >
                  <Box sx={{ typography: 'body1', color: 'grey.500' }}>
                    Choose Property Type
                  </Box>
                  <ExpandMoreRoundedIcon sx={{ color: 'grey.500' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex' }}>
                <Box flexDirection="column">
                  <Box
                    sx={{
                      typography: 'h6',
                      fontWeight: 600,
                      color: 'grey.700',
                    }}
                  >
                    Price Range
                  </Box>
                  <Box
                    sx={{ display: 'flex' }}
                    justifyContent="space-between"
                    pr={2}
                  >
                    <Box sx={{ typography: 'body1', color: 'grey.500' }}>
                      Choose Price Range
                    </Box>
                  </Box>
                </Box>
                <Box
                  p={1}
                  height={40}
                  my={'auto'}
                  sx={{
                    borderRadius: 2,
                    color: 'grey.500',
                    bgcolor: 'primary.main',
                    marginLeft: 'auto',
                  }}
                >
                  <SearchRoundedIcon sx={{ color: 'white' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
      <img
        src={house}
        alt="House"
        style={{
          ...HouseImgStyles,
          position: matches ? 'absolute' : 'relative',
          display: !matches ? 'block' : '',
          height: matches ? '80%' : '200px',
          marginLeft: !matches ? 'auto' : '',
        }}
      />
    </Box>
  );
}
