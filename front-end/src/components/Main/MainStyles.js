import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 170px;
  width: 100%;
  overflow: hidden;
  position: relative;

  img{
    position: absolute;
    left: 0;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 98%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// Gradient for card to make the text more visible 
export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 250px;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
