import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Sec from './pages/Sec';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='sec' element={<Sec/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;