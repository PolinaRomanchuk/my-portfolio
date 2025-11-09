import { lazy, useMemo, useState, type ReactElement, Suspense } from 'react';
import { Projects, type ProjectData } from '../data/projects';
import { Container, Grid, Pagination } from '@mui/material';
import Filter from './Filter';
import Loading from '../utils/Loading';
import Header from './Header';

const ModalComponent = lazy(() => import('./ModalComponent'));
const ProdjectCard = lazy(() => import('./ProdjectCard'));

const ProdjectCardsList = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectData[]>(Projects);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const prodjectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / prodjectsPerPage);
  const startPageIndex = (currentPage - 1) * prodjectsPerPage;
  const endPageIndex = startPageIndex + prodjectsPerPage;
  const currentProjects = useMemo(
    () => filteredProjects.slice(startPageIndex, endPageIndex),
    [filteredProjects, startPageIndex, endPageIndex]
  );
  return (
    <>
      <Header />
      <Container sx={{ py: 5 }}>
        <Filter
          setFilteredProjects={setFilteredProjects}
          setCurrentPage={setCurrentPage}
        />

        <Suspense fallback={<Loading />}>
          <Grid container spacing={2} justifyContent="center">
            {currentProjects.map((project) => (
              <Grid
                key={project.id}
                columns={{ xs: 12, sm: 6, md: 4 }}
                onClick={() => setSelectedProject(project)}
                sx={{ cursor: 'pointer' }}
              >
                <ProdjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Suspense>
        <Pagination
          sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
          count={totalPages}
          showFirstButton
          showLastButton
          page={currentPage}
          onChange={(_, value) => setCurrentPage(value)}
        />
        {selectedProject && (
          <Suspense fallback={<Loading />}>
            <ModalComponent
              {...selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Suspense>
        )}
      </Container>
    </>
  );
};

export default ProdjectCardsList;
