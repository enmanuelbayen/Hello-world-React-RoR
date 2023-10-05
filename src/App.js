import React from 'react';
// import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
