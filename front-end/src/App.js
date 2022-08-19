import React from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Category from './components/Main/Category'


function App() {
  return (
      <Container> 
        <Category/>
        <Pages/>
      </Container>
  );
}

export default App;
