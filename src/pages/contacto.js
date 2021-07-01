import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const contacto = () => {
  return (
    <Layout pageTitle="About Me">
      <a href="https://www.w3schools.com/">
        {" "}
        <FontAwesomeIcon icon={faGithubSquare} fixedWidth size="6x" />
      </a>

      <a href="https://www.w3schools.com/">
        <FontAwesomeIcon icon={faLinkedin} fixedWidth size="6x" />
      </a>

      <a href="https://www.w3schools.com/">
        <FontAwesomeIcon icon={faEnvelopeSquare} fixedWidth size="6x" />
      </a>
    </Layout>
  );
};
export default contacto;
