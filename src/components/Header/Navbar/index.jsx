import React from 'react';
import './styles.css';

const Navbar = () => (
  <navbar className="navbar">
    <a href="">
        <h1>BLOGGOLB</h1>
      </a>

      <nav id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Posts</a></li>
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
  </navbar>
);

export default Navbar;