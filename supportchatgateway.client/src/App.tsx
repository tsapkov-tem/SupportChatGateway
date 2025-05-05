import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

const Main = lazy(() => import('./components/Main/Main'));
const Logs = lazy(() => import("./components/Logs/Logs"));
const Problems = lazy(() => import("./components/Problems/Problems"));
const Supports = lazy(() => import("./components/Supports/Supports"));


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/chats" element={<Main/>} />
            <Route path="/problems" element={<Problems/>} />
            <Route path="/logs" element={<Logs/>} />
            <Route path="/supports" element={<Supports/>} />
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </>
  );
};

export default App;