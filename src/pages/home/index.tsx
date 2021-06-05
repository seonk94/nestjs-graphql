import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import React, { useEffect } from 'react';
import { drift } from 'src/assets/style/animation';
import { GoogleProvider } from 'src/firebase';
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
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: lighten(#f0f4c3, 10%);
  position: fixed;
  overflow: hidden;
  z-index: -1;
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

const Title = styled.h1`
  text-align: center;
  color: cyan;
  font-size: 5em;
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;
const SubTitle = styled.h3`
  text-align: center;
  letter-spacing: 0.15em;
  color: white;
`;

const Home = () => {
  useEffect(() => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/channel',
      signInOptions: [GoogleProvider],
      signInFlow: 'popup',
    });
  }, []);

  return (
    <Container>
      <Title>See Mind</Title>
      <SubTitle>Start with</SubTitle>
      <div id="firebaseui-auth-container" />
      <WaveContainer>
        <Wave time="3000ms" opacity=".4" color="pink" />
        <Wave time="5000ms" opacity=".1" color="coral" />
        <Wave time="7000ms" opacity=".4" color="aqua" />
      </WaveContainer>
    </Container>
  );
};
export default Home;
