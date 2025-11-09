import {
  Box,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useMemo, useState, type ReactElement } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Projects, type ProjectData } from '../data/projects';
import { getAllTechnologies } from '../utils/prodjects';
import { useSearchParams } from 'react-router-dom';

type FilterProps = {
  setFilteredProjects: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Filter = ({
  setFilteredProjects,
  setCurrentPage,
}: FilterProps): ReactElement => {
  const allTechnologies = useMemo(() => getAllTechnologies(), []);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTechs = useMemo(
    () => searchParams.getAll('tech'),
    [searchParams]
  );
  const [isFilterHidden, setIsFilterHidden] = useState<boolean>(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const filtered =
      selectedTechs.length === 0
        ? Projects
        : Projects.filter((project) =>
            selectedTechs.every((tech) => project.technologies.includes(tech))
          );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [selectedTechs, setCurrentPage, setFilteredProjects]);

  const handleToggleTech = (tech: string) => {
    const current = searchParams.getAll('tech');
    let updated: string[];

    if (current.includes(tech)) {
      updated = current.filter((t) => t !== tech);
    } else {
      updated = [...current, tech];
    }

    const newParams = new URLSearchParams();
    updated.forEach((t) => newParams.append('tech', t));
    if (updated.length === 0) {
      setSearchParams({});
    } else {
      setSearchParams(newParams);
    }
    console.log(newParams);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : '',
        justifyContent: isMobile ? 'center' : '',
        alignItems: 'center',
        gap: 2,
        mb: 2,
      }}
    >
      <FilterListIcon
        sx={{ cursor: 'pointer' }}
        color="action"
        onClick={() => {
          setIsFilterHidden((prev) => !prev);
        }}
      />
      {!isFilterHidden && (
        <>
          <Typography variant="h6" component="h2">
            Технологии:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {allTechnologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                clickable
                color={selectedTechs?.includes(tech) ? 'primary' : 'default'}
                onClick={() => handleToggleTech(tech)}
                variant={selectedTechs?.includes(tech) ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};
export default Filter;
