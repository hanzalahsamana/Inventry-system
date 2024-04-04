import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Themeroutes from './routes/Router';
import ThemeSelector from './layouts/theme/ThemeSelector';
import Loader from './layouts/loader/Loader';
import './App.css';
import AOS from 'aos';
import './css/bootstrap.min.css';
import './css/bootstrap.css'; // Ensure your custom CSS files are imported after Bootstrap
import './css/main.css';
import './css/font-awesome/css/all.css';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const routing = useRoutes(Themeroutes);
  const direction = useSelector((state) => state.customizer.isRTL);
  const isMode = useSelector((state) => state.customizer.isDark);
  return (
    <Suspense fallback={<Loader />}>
      <div
        className={`${direction ? 'rtl' : 'ltr'} ${isMode ? 'dark' : ''}`}
        dir={direction ? 'rtl' : 'ltr'}
      >
        <ThemeSelector />
        {routing}
      </div>
    </Suspense>
  );
};

export default App;
