import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vocab from "./pages/Vocab";
import Match from "./pages/Match";
import Menu from "./pages/Menu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <>
      <Menu />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Vocab />} />
          <Route path="/match" element={<Match />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
