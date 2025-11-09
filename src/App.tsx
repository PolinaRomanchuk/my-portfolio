import { lazy, type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
const ProdjectCardsList = lazy(() => import('./components/ProjectCardsList'));

const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProdjectCardsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
