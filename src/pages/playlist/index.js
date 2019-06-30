import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const playlist = () => (
  <Container>
    <Header>
      <img
        src="https://images.genius.com/97250b161e74770ace9ec645c457492f.1000x1000x1.jpg"
        alt="San Holo"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Elektronische</h1>
        <p>955 Músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Lost Lately</td>
          <td>San Holo</td>
          <td>Lost Lately</td>
          <td>3:39</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Lost Lately</td>
          <td>San Holo</td>
          <td>Lost Lately</td>
          <td>3:39</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Lost Lately</td>
          <td>San Holo</td>
          <td>Lost Lately</td>
          <td>3:39</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Lost Lately</td>
          <td>San Holo</td>
          <td>Lost Lately</td>
          <td>3:39</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default playlist;
