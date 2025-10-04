import { lazy, type ReactElement } from 'react';
import Header from './components/Header';
const ProdjectCardsList = lazy(() => import('./components/ProjectCardsList'));

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <ProdjectCardsList />
    </>
  );
};

export default App;
