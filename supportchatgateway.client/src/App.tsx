import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Logs } from "./components/Logs/Logs";
import { Problems } from "./components/Problems/Problems";
import { Supports } from "./components/Supports/Supports";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/chats" element={<Main/>} />
            <Route path="/problems" element={<Problems/>} />
            <Route path="/logs" element={<Logs/>} />
            <Route path="/supports" element={<Supports/>} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;