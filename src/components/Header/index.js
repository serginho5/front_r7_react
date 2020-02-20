import React from 'react';
import Logo from '../../assets/logo.png';
import { Container, ContentImg, ContentText } from './styles';

const Header = () => (
  <Container>
    <ContentImg>
      <img src={Logo} alt="fazenda" />
    </ContentImg>
    <ContentText>
      <h1>RANKING</h1>
    </ContentText>
  </ Container>
);

export default Header;
