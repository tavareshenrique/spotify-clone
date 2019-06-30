import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://images.genius.com/97250b161e74770ace9ec645c457492f.1000x1000x1.jpg"
          alt="San Holo"
        />
        <strong>This is: San Holo</strong>
        <p>I've been feeling lost lately</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images.genius.com/97250b161e74770ace9ec645c457492f.1000x1000x1.jpg"
          alt="San Holo"
        />
        <strong>This is: San Holo</strong>
        <p>I've been feeling lost lately</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images.genius.com/97250b161e74770ace9ec645c457492f.1000x1000x1.jpg"
          alt="San Holo"
        />
        <strong>This is: San Holo</strong>
        <p>I've been feeling lost lately</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images.genius.com/97250b161e74770ace9ec645c457492f.1000x1000x1.jpg"
          alt="San Holo"
        />
        <strong>This is: San Holo</strong>
        <p>I've been feeling lost lately</p>
      </Playlist>
    </List>
  </Container>
);

export default browse;
