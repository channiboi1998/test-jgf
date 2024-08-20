import { Loader } from '@shared/components';
import { Footer, Header } from '@shared/layout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default App;
