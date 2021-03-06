import React from 'react'
import WipImage from '../assets/wip.png';
import styled, { keyframes } from 'styled-components';

let Loading = ({ isLoaded }) =>
  <>
    <LoadingBackground isLoaded={isLoaded} />
    <div style={{
      height: '100vh',
      display: 'flex',
      width: '100%',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 300,
      opacity: !isLoaded ? 1 : 0,
      visibility: !isLoaded ? 'visible' : 'hidden',
      transition: 'opacity 1s, visibility 0.5s linear 1s',
    }}>
      <AnimatedImage src={WipImage} height={200} />
    </div>
  </>





const updown = keyframes`
  0% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0);
  } 
`;

const AnimatedImage = styled.img`
  animation: ${updown} 2s ease infinite;
`;

const LoadingBackground = styled.div`
  height: 100vh;
  background-color: #FFE000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 200;
  opacity: ${({ isLoaded }) => isLoaded ? 0 : 1};
  visibility: ${({ isLoaded }) => isLoaded ? 'hidden' : 'visible'};
  transition: opacity 1s, visibility 0.5s linear 1s; 
`;


export default Loading;