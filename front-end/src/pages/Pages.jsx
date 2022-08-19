import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import React from 'react';
import Home from './page_components/Home';
import Cuisine from './page_components/Cuisine';
import SearchResults from './page_components/SearchResults';
import Recipe from './page_components/Recipe';

const Pages = () => {
  const location = useLocation();
  // useLocation() is required to make animatePresence works (as we are working with react-router)
  // For this, we need to imbed Routes with a key and a location (see below)
  return (
    // <AnimatePresence> wraps all routes in pages to detect change to initiate animations on route enter/exit
    // 'exitBeforeEnter' enables the animation to be completed on exit before loading the enter animation
  <AnimatePresence mode='wait'>
    <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<SearchResults/>}/>
      <Route path='/recipe/:name' element={<Recipe/>}/>
    </Routes>
  </AnimatePresence>
  )
}

export default Pages