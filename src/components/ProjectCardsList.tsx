import { useState, type ReactElement } from 'react';
import { Projects } from '../data/projects';
import ProdjectCard from './ProdjectCard';
import { Container, Grid, Pagination } from '@mui/material';

const ProdjectCardsList = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);

  const prodjectsPerPage = 6;
  const totalPages = Math.ceil(Projects.length / prodjectsPerPage);
  const startPageIndex = (currentPage - 1) * prodjectsPerPage;
  const endPageIndex = startPageIndex + prodjectsPerPage;

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        {Projects.slice(startPageIndex, endPageIndex).map((project) => (
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
