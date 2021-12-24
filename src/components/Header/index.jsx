import React from 'react';
import { Header, Nav } from './styles';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsMedium, BsTwitter, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { DiPython } from 'react-icons/di';

export const HeaderComponent = () => {
  return (
    <Header>
      <h3>Leninner</h3>
      <Nav>
        <ul>
          <li className='projects-li projects'>
            Projects
            <div>
              <Link to='/'>
                {' '}
                All <BsFillFileEarmarkCodeFill />
              </Link>
              <Link to='/'>
                {' '}
                React <RiReactjsLine size='20' />
              </Link>
              <Link to='/'>
                {' '}
                Javascript <SiJavascript />
              </Link>
              <Link to='/'>
                {' '}
                Automations <DiPython size='30' />
              </Link>
            </div>
          </li>
          <li className='projects-li rrss'>
            Social Networks
            <div>
              <a href='https://github.com/leninner' target='_blank' rel='noreferrer'>
                {' '}
                Github <AiFillGithub size='20' />
              </a>
              <a href='https://medium.com/@leninner' target='_blank' rel='noreferrer'>
                {' '}
                Medium <BsMedium size='20' />
              </a>
              <a href='https://www.linkedin.com/in/leninner/' target='_blank' rel='noreferrer'>
                {' '}
                LinkedIn <AiFillLinkedin size='20' />
              </a>
              <a href='https://twitter.com/_leninner' target='_blank' rel='noreferrer'>
                {' '}
                Twitter <BsTwitter size='20' />
              </a>
              <a href='https://www.instagram.com/_leninner/' target='_blank' rel='noreferrer'>
                {' '}
                Instagram <AiFillInstagram size='26' />
              </a>
            </div>
          </li>

          <li>Descargar CV</li>
          <li>Blog</li>
        </ul>
      </Nav>
    </Header>
  );
};
