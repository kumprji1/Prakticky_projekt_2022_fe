import React from "react";

import Navigation from "./shared/components/Navigation/Navigation";

import './main.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <section className="project_section">
          <h1 className="project_name_label">Projekt</h1>
          <h1 className="project_name">
            Kybernetická bezpečnost chytrých měst
          </h1>
          <p className="project_description">
            Popis projektu. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Curabitur sagittis hendrerit ante. Integer malesuada. Aliquam
            id dolor. Praesent in mauris eu tortor porttitor accumsan. Nulla
            quis diam. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </p>
        </section>
        <section className="workshop_section">
          <div className="workshop_section__content_wrapper">
            <div className="first_workshop__item">
              <div className="first_workshop__item--title_wrapper">
                <h1 className="first_workshop__item--title_label">WORKSHOP</h1>
                <h1 className="first_workshop__item--title">Motivační název</h1>
              </div>
              <p className="first_workshop__item--description">
                Popis workshopu. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Curabitur sagittis hendrerit ante. Integer
                malesuada. Aliquam id dolor. Praesent in mauris eu tortor
                porttitor accumsan. Nulla quis diam. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur?
              </p>
              <div className="first_workshop__item--dates_title_wrapper">
                <h1 className="first_workshop__item--dates">Termíny</h1>
              </div>
              <p className="first_workshop__item--date">12. prosince 2022</p>
              <div className="first_workshop__item--dates_title_wrapper">
                <h1 className="first_workshop__item--dates">Program</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="footer-text">2022 © Univerzita Hradec Králové</p>
      </footer>
    </div>
  );
}

export default App;
