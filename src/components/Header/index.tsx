import { Box, Button, useMediaQuery, IconButton } from '@mui/material';
import React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { HeaderStyles, ButtonDefaultStyles, BtnOutlined } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const matches = useMediaQuery('(min-width:980px)');

  return (
    <Box component="header" px={matches ? 6 : 2} py={5} style={HeaderStyles}>
      <img src={logo} alt="Logo" />
      {matches ? (
        <div>
          <Button sx={ButtonDefaultStyles} variant="text">
            HOME
          </Button>
          <Button sx={ButtonDefaultStyles} variant="text">
            PROPERTIES
          </Button>
          <Button sx={ButtonDefaultStyles} variant="text">
            AGENTS
          </Button>
          <Button sx={ButtonDefaultStyles} variant="text">
            BLOG
          </Button>
          <Button
            sx={{ ...ButtonDefaultStyles, ...BtnOutlined }}
            variant="outlined"
          >
            LOG IN
          </Button>
        </div>
      ) : (
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
      )}
    </Box>
  );
}
