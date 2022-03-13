import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageNotFound } from './shared_ui_elements';
import { ToastMessage } from './shared_ui_components';
import ErrorBoundary from './utils/ErrorBoundary';
import ScrollToTop from './utils/ScrollToTop';

const App: FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Navigate to='/' />} />
            <Route path='*' element={<PageNotFound />} />;
          </Routes>
          <ToastMessage />
        </ScrollToTop>
      </ErrorBoundary>
    </div>
  );
};

export default App;
