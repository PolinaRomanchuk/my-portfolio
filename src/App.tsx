import type { ReactElement } from 'react';
import ProdjectCardsList from './components/ProjectCardsList';
import Header from './components/Header';

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <ProdjectCardsList />
    </>
  );
};

export default App;
