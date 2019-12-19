import React from 'react';
import './styles.scss';
import Logo from '../../assets/c7915d9b389bd7b3764fb11445b53bba-infinito-simple-logo-infinito-by-vexels.png';

const Header = () => (
  <header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img data-test="logoIMG" src={Logo} alt="Logo" />
        <h3>
          InfiniteWeb
        </h3>
      </div>
    </div>
  </header>
)

export default Header;