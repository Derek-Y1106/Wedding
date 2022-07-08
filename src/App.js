import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Mr from './pages/Mr';
import Mrs from './pages/Mrs';
import Footer from "./global/Footer";
import Header from "./global/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div><Header/></div>
        
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Wedding_Website" exact element={<Home />} />
            <Route path="/Mr" exact element={<Mr />} />
            <Route path="/Mrs" exact element={<Mrs />} />
          </Routes>
        
        <div><Footer/></div>
      </BrowserRouter>
      </div>
  );
}

export default App;
