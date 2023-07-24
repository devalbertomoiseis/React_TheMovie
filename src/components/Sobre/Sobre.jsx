import Navbar from "../../components/Navbar/Navbar";
import "./Sobre.css";

const Details = () => {
  return (
    <>

      <Navbar />
      <div className="container">
        <div className="sub-container">
          <div>

            <h1>PROGRAMAÇAO WEB FULL STACK</h1>
            <p>
              Incorpore as habilidades de programação que lhe permitirão criar
              um sistema completo, desde as interfaces de usuário (Front-End) à
              lógica que opera por trás das requisições (Back-End).
            </p>
          </div>
          <div>
            <h3>O QUE É PROGRAMAÇAO?</h3>
            <p>
              De forma geral, a programação é um processo de escrita, testes e
              manutenção de programas de computadores. Hoje em dia, todos os
              programas e aplicativos que utilizamos no dia a dia, são criados à
              partir de códigos nas diversas linguagens de programação que
              existem.
            </p>
            <p>
              Hoje, a tecnologia está presente em todos os trabalhos e saber
              programar tornou-se uma habilidade fundamental. A certificação
              oferece treinamento e suporte para dar os primeiros passos no que
              hoje é a função mais exigida pela indústria mundial. Você
              aprenderá desde os fundamentos da programação até o lançamento de
              aplicativos completos da web, resolver problemas aplicando as
              melhores práticas do mercado.
            </p>
            <h4>O QUE VOCÊ VAI ATINGIR COM ESTA CERTIFICAÇAO?</h4>
            <p>
              Ao longo do curso, você aprenderá os conceitos básicos da
              programação, assim como as linguagens mais utilizadas no mercado,
              para criar um sistema completo. Durante o curso, você vai colocar
              o aprendizado em prática ao desenvolver um projeto real e assim,
              construir um portfólio para apresentar às empresas que buscam
              contratar desenvolvedores Fullstack.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
