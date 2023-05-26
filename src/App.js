import React from "react";
import LandingPage from "./My_app/frontend/pages/landing_page/landing_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./My_app/frontend/pages/login_page/login_page.js";
import SignupPage from "./My_app/frontend/pages/signup_page/signup_page.js";

const App = () => { 
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
  
    );
}

export default App;