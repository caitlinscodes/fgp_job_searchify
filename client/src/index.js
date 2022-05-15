import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  JobSearch,
  Resume,
  Login,
  Signup
} from "./components";
import ProtectRoute from "./components/ProtectRoute"

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobsearch" element={<JobSearch />} />
      <Route 
        path="/resume-builder" 
        element={
          <ProtectRoute>
            <Resume />
          </ProtectRoute>
      } />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
