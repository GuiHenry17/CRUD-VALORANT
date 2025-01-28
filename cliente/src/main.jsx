import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Alter from './pages/Alter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='alter/:id' element={<Alter />}/>
    </Routes>
  </BrowserRouter>
);