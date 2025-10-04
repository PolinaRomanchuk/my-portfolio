import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Avatar alt="photo" src="/polina.webp" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
