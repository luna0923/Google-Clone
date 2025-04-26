import './App.css';
import Home from './pages/Homepage.js';
import Findpage from './pages/Findpage.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Findpage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
