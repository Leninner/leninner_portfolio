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
            <span
              onClick={() => {
                document.querySelector('.projects').classList.toggle('active');
              }}>
              Projects
            </span>
            <div className='projects'>
              <Link to='/'> All </Link>
              <Link to='/'> React </Link>
              <Link to='/'> Javascript Vanilla </Link>
              <Link to='/'> Automatizaciones </Link>
            </div>
          </li>
          <li>
            <Link to='#'>Redes Sociales</Link>
          </li>
          <li>
            <a
              href='https://github.com/Leninner/leninner_portfolio/blob/main/src/utils/english-creative-frontend-developer.pdf'
              target='_blank'
              rel='noreferrer'>
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
