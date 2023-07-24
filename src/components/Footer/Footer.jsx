import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://www.campinhodigital.org/"
          style={{ textDecoration: "none" }}
        >
          <span className="span-campinho"> Campinho </span> Digital
        </a>
        <br />

        {/*
         <div className="miniSlide-container">
          <p>Desenvolvido por: </p>
          <ul>
            <li>Washington</li>
            <li>Alberto moises</li>
          </ul>
        </div>
         
         */}
      </footer>
    </>
  );
};

export default Footer;
