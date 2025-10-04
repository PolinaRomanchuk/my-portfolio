import { Box, CircularProgress } from '@mui/material';
import type { ReactElement } from 'react';

const Loading = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};

export default Loading;
