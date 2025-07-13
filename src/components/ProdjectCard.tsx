import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import type { ReactElement } from 'react';

interface CardProps {
  id: number;
  photoURL: string;
  name: string;
  description: string;
  technologies: string[];
  repo: string;
  deploy: string;
}

const ProdjectCard = ({
  id,
  photoURL,
  name,
  description,
  technologies,
  repo,
  deploy,
}: CardProps): ReactElement => {
  return (
    <Card sx={{ width: 320 }} key={id}>
      <CardMedia sx={{ height: 140 }} image={photoURL} title="preview" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {technologies.map((techno) => (
            <Chip label={techno} size="small" key={techno} />
          ))}
        </Stack>
      </CardContent>
      <CardActions className="card_button-container">
        <Button variant="outlined" size="small" href={repo} target="_blank">
          Repository
        </Button>
        <Button size="small" variant="outlined" href={deploy} target="_blank">
          Deploy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProdjectCard;
