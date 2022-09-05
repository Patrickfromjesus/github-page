import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Header from "../../Components/Header";
import css from '../../images/css-logo.png';
import html from '../../images/html-logo.png';
import js from '../../images/javaScript-logo.png';
import reactImage from '../../images/react-logo.png';
import redux from '../../images/redux-logo.png';
import rtl from '../../images/rtl-logo.png';
import git from '../../images/git-logo.svg';
import jest from '../../images/jest-logo.png';
import linkedin from '../../images/linked-in-logo.png';

class Home extends Component {
  render() {
    return (
      <div className="div-home">
        <Header />
        <h1 className="greetings-home">Bem-vindo ao meu Portfólio!</h1>
        <h3>Um pouco sobre mim</h3>
        <p className="about-me">{`
          Meu nome é Patrick, tenho 20 anos, nascido no Rio de Janeiro, porém, atualmente resido em Salvador - BA. 
          Sou estudante de Engenharia de Software na faculdade Estácio e estudante de Desenvolvimento Web na Trybe, ex-militar 
          da Força Aérea, passei no concurso da EPCAR com 15 anos onde estudei por 1 ano e meio e tive o primeiro contato com programação (JAVA), 
          quase fui piloto militar, mas não era o que Deus queria para minha vida. Após minha saída da vida militar, comecei a faculdade e a Trybe, onde estudo 
          ainda atualmente. Lá aprendi a desenvolver aplicações complexas com JavaScript, HTML5, CSS3 e frameworks, React, Redux e fazer testes com Jest e RTL. 
          Tive contato com metodologias ágeis (Scrum e Kanban), clean code, boas práticas, versionamento de código (Git) e continuo aprendendo. Estou terminando os estudos em FrontEnd 
          nesse semestre ainda. Sou sedento por aprendizado e se tivesse que listar minhas qualidades principais seriam a resiliência e capacidade de se concentrar e ignorar as distrações. 
          Considero-me muito estudioso e dedicado ao que faço, sou temente a Deus, guardado por Ele e não negocio minha fé. Por ter sido militar de escola de formação de Oficias, 
          acredito que desenvolvi muito minha inteligência emocional e rigidez psicológica, o que acredito também ser de grande valia no ambiente de trabalho.
          `}
        </p>
        <h3>Tecnologias estudadas</h3>
        <div className="imgs-tech">
          <img className="tech-images" src={ css } alt={ css } />
          <img className="tech-images" src={ html } alt={ html } />
          <img className="tech-images" src={ js } alt={ js } />
          <img className="tech-images" src={ reactImage } alt={ reactImage } />
          <img className="tech-images" src={ redux } alt={ redux } />
          <img className="tech-images" src={ rtl } alt={ rtl } />
          <img className="tech-images" src={ jest } alt={ jest } />
          <img className="tech-images" src={ git } alt={ git } />
        </div>
        <h3>Para que emprego eu seria um bom profissional?</h3>
        <p className="about-me">{ `
          Independente do emprego, sei que seria o melhor que posso ser, dando meu máximo que pudesse, 
          porém, em relação às qualificações, o trabalho de FrontEnd seria o ideal para mim, visto que 
          minhas stacks são voltadas para esse ramo.
        ` }</p>
        <h3>Quais são meus diferenciais</h3>
        <p className="about-me">{ `
          Como mencionei mais acima, a capacidade de concentração, independente do estilo de trabalho, seja home office, seja presencial, 
          pode ser um diferencial. O costume com a rotina de cumprir tarefas, independente da complexidade, como era muito requisito na FAB 
          também pode agregar qualidade à empresa, além da trilha de softskills desenvolvida ao longo do curso da`} <a
          href="https://www.betrybe.com/"
          rel="noreferrer"
          target="_blank"
          className="trybe-redirect"
          >
            <em>Trybe</em>
          </a>
          {` e da vida como militar, em que conversava muito com superiores hieráquicos e fazia apresentações quando necessário.
          Também desenvolvi liderança, comandando esquadrões e subordinados.  
        ` }</p>
        <h3>Projetos Realizados</h3>
        <ul className="list-projects">
          <Link className="link" to="/github-page/color-guess"><li className="about-me">Color Guess</li></Link>
          <Link className="link" to="/github-page/pixel-art"><li className="about-me">Pixel Art</li></Link>
          <li className="about-me">Shopping Cart</li>
          <li className="about-me">TrybeTunes</li>
          <Link className=" link about-me" to="/github-page/tryunfo"><li className="about-me">Tryunfo</li></Link>
          <Link className="link" to="/github-page/trybewallet"><li className="about-me">TrybeWallet</li></Link>
          <Link className="link" to="github-page/bible">
            <li className="about-me">
              Bible
            </li>
          </Link>
        </ul>
        <hr />
        <footer className="footer-home">
          <p>Caso queira entrar em contato, mande um email para patrick_epcar17@outlook.com</p>
          <p>
            <img className="img-contact" src={ linkedin } alt="linkedin" />
            <a className="link" href="https://www.linkedin.com/in/patrickgomesc/" target="_blank" rel="noreferrer">Linkedin</a>
          </p>
          <p>
            <img className="img-contact" src={ git } alt="github" />
            <a className="link" href="https://github.com/Patrickfromjesus" target="_blank" rel="noreferrer">Github</a>
          </p>
          <p className="copyright">&copy;Portfólio de Patrick Gomes da Conceição</p>
        </footer>
      </div>
    );
  }
}

export default Home;