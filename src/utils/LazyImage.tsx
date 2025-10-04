import { useState } from 'react';
import { Box } from '@mui/material';

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: 140,
        width: '100%',
        borderRadius: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default LazyImage;
