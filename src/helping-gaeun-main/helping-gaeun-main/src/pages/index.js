import React from 'react';
import {
  Route, Routes, HashRouter,
} from 'react-router-dom';

import HomeContainer from '../containers/Home/HomeContainer';
import { Notfound } from '../containers/NotFound';

const Root = () => {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<HomeContainer />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Root;
