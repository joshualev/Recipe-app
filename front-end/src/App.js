import React from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Navbar from './components/Navbar/Navbar'
import AdvancedSearch from './components/Navbar/AdvancedSearch';

function App() {
  return (
      <Container> 
        <Navbar/>
        <Pages/>
      </Container>
  );
}

export default App;
