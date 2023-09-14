import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className=''>
      <Header></Header>
      <Outlet></Outlet>
    
    </div>
  );
};

export default App;