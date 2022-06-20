import React, { Fragment } from "react";
import ArtisecLogo from "../../img/artisec_pod_zamkem.jpg";
import ClaimLogo from "../../img/CLAIM_LOGO_RGB.png";
import InovaceLogo from "../../img/plus-inovace_Logo-barva-negativ_RGB.jpg";

const FirstPage = () => {
  return (
    <Fragment>
      <section className="project_section">
        <div className="project_and_logo--wrapper">
          <div className="project_section--left">
            <h1 className="project_name_label">Projekt</h1>
            <h1 className="project_name">
              Využití umělé inteligence pro zajištění kybernetické bezpečnosti
              Smart City
            </h1>
            <div className="project_names">
              <span>1. řešitel</span>
              <span>2. řešitel</span>
              <span>aplikační garant</span>
            </div>
          </div>
          <div className="project_section--right">
            <img
              className="project_section__artisec_logo"
              src={ArtisecLogo}
              alt="Artisec Logo"
            />
          </div>
        </div>
        <a
          className="artisec_project_link"
          href="https://www.artisec.cz/o-projektu"
        >
          Přejít na ARTISEC
        </a>
        <a
          className="uhk_project_link"
          href="https://www.uhk.cz/cs/fakulta-informatiky-a-managementu/veda-a-vyzkum/vav-projekty/projekty-ministerstva-vnitra-cr"
        >
          Více o projektu
        </a>
      </section>
      <section className="sponzori_section">
        <div className="sponzori_section__content_wrapper">
          <img className="sponzors_logo" src={ClaimLogo} alt="Claim Logo" />
          <img className="sponzors_logo" src={InovaceLogo} alt="Inovace Logo" />
        </div>
      </section>
      {/* <section className="workshop_section">
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
      </section> */}
    </Fragment>
  );
};

export default FirstPage;
