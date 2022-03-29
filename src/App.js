import React from "react";

import Navigation from "./shared/components/Navigation/Navigation";

import FirstPage from "./shared/pages/FirstPage";

import "./main.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <FirstPage />
      </main>
      <footer>
        <p className="footer-text">2022 © Univerzita Hradec Králové</p>
      </footer>
    </div>
  );
}

export default App;
