import { useState, type ReactElement } from 'react';
import { Projects, type ProjectData } from '../data/projects';
import ProdjectCard from './ProdjectCard';
import { Container, Grid, Pagination } from '@mui/material';
import Filter from './Filter';

const ProdjectCardsList = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectData[]>(Projects);

  const prodjectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / prodjectsPerPage);
  const startPageIndex = (currentPage - 1) * prodjectsPerPage;
  const endPageIndex = startPageIndex + prodjectsPerPage;
  const currentProjects = filteredProjects.slice(startPageIndex, endPageIndex);

  return (
    <Container sx={{ py: 5 }}>
      <Filter
        setFilteredProjects={setFilteredProjects}
        setCurrentPage={setCurrentPage}
      />
      <Grid container spacing={2} justifyContent="center">
        {currentProjects.map((project) => (
          <Grid key={project.id} columns={{ xs: 12, sm: 6, md: 4 }}>
            <ProdjectCard
              id={project.id}
              photoURL={project.photoURL}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              repo={project.repo}
              deploy={project.deploy}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={(_, value) => setCurrentPage(value)}
      />
    </Container>
  );
};

export default ProdjectCardsList;
