import { Box, Chip, Stack, Typography } from '@mui/material';
import { useEffect, useState, type ReactElement } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Projects, type ProjectData } from '../data/projects';
import { getAllTechnologies } from '../utils/prodjects';

type FilterProps = {
  setFilteredProjects: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Filter = ({
  setFilteredProjects,
  setCurrentPage,
}: FilterProps): ReactElement => {
  const allTechnologies = getAllTechnologies();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [isFilterHidden, setIsFilterHidden] = useState<boolean>(true);
  useEffect(() => {
    const filtered =
      selectedTechs.length === 0
        ? Projects
        : Projects.filter((project) =>
            selectedTechs.every((tech) => project.technologies.includes(tech))
          );

    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [selectedTechs, setFilteredProjects, setCurrentPage]);

  const handleToggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
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
