import React from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Category from './components/Main/Category'
import Navbar from './components/Navbar/Navbar'
import AdvancedSearch from './components/Navbar/AdvancedSearch';

function App() {
  return (
      <Container> 
        <Navbar/>
        {/* <AdvancedSearch/> */}
        <Category/>
        <Pages/>
      </Container>
  );
}

export default App;
