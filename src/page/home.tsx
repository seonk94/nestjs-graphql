import React from 'react';
import { drift } from 'src/assets/style/animation';
import styled from 'styled-components';

interface WavePropType {
  time: string;
  color: string;
  opacity: string;
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const WaveContainer = styled.div`
  flex-grow: 1;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 2px 30px rgba(black, .2);
  background: lighten(#f0f4c3, 10%);
  position: fixed;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

const Wave = styled.div<WavePropType>`
  position: absolute;
  width: 300vh;
  left: 50%;
  bottom: 50%;
  height: 300vh;
  margin-left: -150vh;
  margin-right: -150vh;
  transform-origin: 50% 48%;
  border-radius: 43%;
  opacity: ${(props) => props.opacity};
  background: ${(props) => props.color};
  animation: ${drift} ${(props) => props.time} infinite linear;
`;

const Title = styled.p`
  text-align: center;
  color: cyan;
  font-size: 5em;
  text-transform: uppercase;
  letter-spacing: .3em;
`;

const Home = () => (
  <Container>
    <Title>See Mind</Title>
    <WaveContainer>
      <Wave time="3000ms" opacity=".4" color="pink" />
      <Wave time="5000ms" opacity=".1" color="coral" />
      <Wave time="7000ms" opacity=".4" color="aqua" />
    </WaveContainer>
  </Container>
);
export default Home;