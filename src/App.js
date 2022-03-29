import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./shared/components/Header/Header";

// Pages
import FirstPage from "./shared/pages/FirstPage";

import "./main.css";
import Footer from "./shared/components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/prvni-workshop" element={<FirstPage />} />
            <Route path="/" element={<FirstPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
