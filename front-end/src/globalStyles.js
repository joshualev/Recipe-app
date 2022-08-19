import styled from 'styled-components';


export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  font-family: 'Montessart' sans-serif;

  @media screen and (max-width: 960px) {
    padding 0 30px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1.4rem;
  font-size: 1.3em;
  line-height: 1.1;
  font-weight: 900;
`;

