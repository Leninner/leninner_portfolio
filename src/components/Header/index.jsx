import React from 'react';
import { Header, Nav } from './styles';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
  return (
    <Header>
      <h3>Leninner</h3>
      <Nav>
        <ul>
          <li>
            <Link to='#'>Proyectos</Link>
          </li>
          <li>
            <Link to='#'>Redes Sociales</Link>
          </li>
          <li>
            <a
              href='https://github.com/Leninner/leninner_portfolio/blob/main/src/utils/english-creative-frontend-developer.pdf'
              download='frontend_developer_lenin_mazabanda.pdf'>
              Descargar CV
            </a>
          </li>
          <li>
            <a href='https://wa.link/0sy727' target='_blank' rel='noreferrer'>
              Blog
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};
