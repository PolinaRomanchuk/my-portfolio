import {
  Box,
  Button,
  Chip,
  Link,
  Modal,
  Stack,
  Typography,
} from '@mui/material';

import { type ReactElement } from 'react';

interface ModalProps {
  id: number;
  photoURL: string;
  name: string;
  description: string;
  features?: string[];
  purpose: string;
  technologies: string[];
  repo: string;
  deploy: string;
  setting?: string;
  task?: string;
  onClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalComponent = (props: ModalProps): ReactElement => {
  const {
    name,
    description,
    purpose,
    photoURL,
    technologies,
    repo,
    deploy,
    features,
    setting,
    task,
    onClose,
  } = props;

  return (
    <div>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            {name}
          </Typography>

          <Box
            component="img"
            src={photoURL}
            alt={name}
            sx={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
              borderRadius: 1,
              mb: 2,
            }}
          />

          <Typography variant="body1" mb={2}>
            {description}
          </Typography>

          {purpose && (
            <Typography variant="subtitle2" color="text.secondary" mb={1}>
              Задача: {purpose}
            </Typography>
          )}
          {task && (
            <Typography variant="subtitle2" color="text.secondary" mb={1}>
              <Link
                href={task}
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Посмотреть задание
              </Link>
            </Typography>
          )}
          {setting && (
            <Typography variant="subtitle2" color="error" mb={1}>
              Настройки: {setting}
            </Typography>
          )}

          {features?.length && (
            <Box mb={2}>
              <Typography variant="subtitle2" mb={1}>
                Особенности:
              </Typography>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {features.map((f, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{f}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          )}

          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}>
              Технологии:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {technologies.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </Stack>
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between" gap={2}>
            <Link href={repo} target="_blank" rel="noopener" underline="none">
              <Button variant="outlined" color="primary" fullWidth>
                Репозиторий
              </Button>
            </Link>
            <Link href={deploy} target="_blank" rel="noopener" underline="none">
              <Button variant="outlined" color="primary" fullWidth>
                Деплой
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
