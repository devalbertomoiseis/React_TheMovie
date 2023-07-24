import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <h1>Rede Social</h1>

      <div className="flex">
        <div className="contato-rede-social">
          <img
            src="https://avatars.githubusercontent.com/u/68349833?v=4"
            className="foto"
            alt="Imagem redonda do integrante Washington, com fundo...."
          />
          <h4>Washington</h4>

          <div className="link-contato">
            <a
              href="https://github.com/washingtongomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png"
                alt="imagem github"
                className="img-github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/washingtonsimoesgomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png"
                alt="imagem linkedin"
                className="img-linkedin"
              />
            </a>
          </div>
        </div>

        <div className="contato-rede-social">
          <img
            src="https://avatars.githubusercontent.com/u/130398161?v=4"
            className="foto"
            alt="Imagem redonda do integrante Alberto..."
          />
          <h4> Alberto Moises </h4>

          <div className="link-contato">
            <a
              href="https://github.com/devalbertomoiseis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png"
                alt="imagem github"
                className="img-github"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png"
                alt="imagem linkedin"
                className="img-linkedin"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
