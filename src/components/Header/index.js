import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" alt="Henrique Tavares" />
      Henrique Tavares
    </User>
  </Container>
);

export default Header;
