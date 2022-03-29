import React, { Fragment } from "react";

const FirstPage = () => {
  return (
    <Fragment>
      <section className="project_section">
        <h1 className="project_name_label">Projekt</h1>
        <h1 className="project_name">
          Využití umělé inteligence pro zajištění kybernetické bezpečnosti Smart
          City
        </h1>
        <p className="project_description">
          Hlavním záměrem je navrhnout a ověřit komplexní bezpečnostní model
          využití umělé inteligence pro zajištění kybernetické bezpečnosti Smart
          City založený na datové analýze primárních a podpůrných datových aktiv
          využívaných v rozsahu Smart City. Model využití umělé inteligence pro
          zajištění kybernetické bezpečnosti založený na datových aktivech
          umožní vytvoření a následné ověření víceúrovňového bezpečnostního
          modelu řízeného dle procesů definovaných v mezinárodně uznávaném
          systému pro řízení a správy IT služeb ITIL splňujícího bezpečnostní
          kritéria dle ČSN EN ISO / IEC 27001. Pro zajištění Demingova cyklu
          PDCA s ohledem na udržitelnost celého bezpečnostního systému budou v
          rámci řešení nasazeny prostředky umělé inteligence.
        </p>
        <a className="uhk_project_link" href="https://www.uhk.cz/cs/fakulta-informatiky-a-managementu/veda-a-vyzkum/vav-projekty/projekty-ministerstva-vnitra-cr">
          Přejít na univerzitní stránky
        </a>
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
    </Fragment>
  );
};

export default FirstPage;
