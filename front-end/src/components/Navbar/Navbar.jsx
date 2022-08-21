import * as React from 'react';
import { useState } from 'react'
import {useNavigate, Link, NavLink} from 'react-router-dom'

import {motion,AnimatePresence} from 'framer-motion'
import {useLocation} from "react-router-dom";

import AdvancedSearch from './AdvancedSearch';
import {AdvancedFilter} from './AdvancedSearchStyles'


import styled from 'styled-components'
import { ThemeProvider, createTheme} from '@mui/material/styles';

import { Stack, Toolbar, AppBar, Box, Paper,Button, BottomNavigation, BottomNavigationAction, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5FC25F',
    },
    neutral: {
      main: '#F4FBF4',
    },
  },
});

const SecondaryTheme = createTheme({
  palette: {
    primary: {
      main: '#F4FBF4',
    },
    neutral: {
      main: '#F4FBF4',
    },
  },
});


export default function Navbar() {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // enables exit animations when used motion animations to enable exit animation
  const location=useLocation()


  const onHandleFilter = (e) => {
    setIsChecked(!isChecked)
  }

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/'+ input)
    console.log(input)
  };
  return( 
    <>


      {/* Top Navbar */}
    <ThemeProvider theme={theme} >
      <Stack
        spacing={2} 
        sx={{ display: {xs: 'none', sm:'block', top: 0, left: 0, right: 0}, flexGrow: 1}}
      >
        <AppBar position="fixed" color="primary" >
          <Toolbar>
          <Box sx={{ display: { sm: 'flex'}, flexGrow: 1}}/>
            <NavLink style={{textDecoration: 'none'}} to='/'>
              <Button color="neutral" aria-label="button" sx={{ ml:2,mr: 2 }}>
                Discover
              </Button>
            </NavLink>  
            <NavLink style={{textDecoration: 'none'}}  to='/user/recipes'>
              <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
                Saved Recipes
              </Button>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}}  to='/user/mealplan'>
              <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
                  Meal Plan
              </Button>
            </NavLink>
            <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
              Account
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{padding:1}}/>
      </Stack>

      <AnimatePresence>
      {/* AnimatePresence wraps over motion.div, this enables exit animations by
      delays mounting child components until exit animations are completed*/}
      {/* If checked is true, show advanced filters */}
      {!isChecked 
      ?
        <Box 
          sx={{ 
            display: {xs:'none', sm: 'block'}, 
            mt:8, 
            flexGrow: 1}}
          >
          <Paper
            component="form"
            onSubmit={submitHandler}
              sx={{ 
                m:'5px auto', p: '4px 4px', display: 'flex', width: '40%', borderRadius:'30px', backgroundColor:'rgba(95, 194, 95, 0.1)'
              }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find recipes"
              inputProps={{ 'aria-label': 'Search' }}
              input onChange={(e) => setInput(e.target.value)}
            />
              <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <AdvancedFilter>
                <label htmlFor='advancedFilter'>Filter
                  <input onChange={onHandleFilter} checked={isChecked} name="advancedFilter" id='advancedFilter' type='checkbox'/>
                </label>
          </AdvancedFilter>
          
        </Box>
      :
      <Box sx={{ display: {xs: 'none', sm:'block'}, mt:'3rem'}}>

          <motion.div
          //animation requires a unique key to work 
          key="searchNewLarge"
          // start animation at 50% on y axis, invisible and at half scale
          initial={{y:'50%', opacity: 0, scale: 0.5}}
          // animate to original position with opacity of 1 and original scale
          animate={{y:0, opacity: 1, scale: 1}}
          // exit animation, return to original y axis animation (from enter) with opacity of 0 and a shorter duration.
          exit={{
            y:'50%', opacity: 0, 
            transition: {duration: 0.1}, 
          }}
          // default transition (will be used unless specified otherwise, i.e exit animation above)
          transition={{duration: 0.2, ease: "easeOut"}}
          className='searchAdvanced'
        >

            <AdvancedFilter>
              <label htmlFor='advancedFilter'> Cancel
                <input onChange={onHandleFilter} checked={isChecked} name="advancedFilter" id='advancedFilter' type='checkbox'/>
              </label>
            </AdvancedFilter>
            <AdvancedSearch/>
          </motion.div>
      </Box>
      }
      </AnimatePresence>
    </ThemeProvider>          


    {/* Bottom Navbar */}
    <ThemeProvider theme={SecondaryTheme} >

    <AnimatePresence>
      {/* AnimatePresence wraps over motion.div, this enables exit animations by
      delays mounting child components until exit animations are completed*/}
      {/* If checked is true, show advanced filters */}
      {!isChecked 
      ?
      <Box sx={{ display: {xs:'block', sm: 'none'}, flexGrow: 1}}>
        <Paper
          component="form"
          onSubmit={submitHandler}
          sx={{ 
            m:'5px auto', p: '4px 4px', display: 'flex', width: '70%',borderRadius: '30px', backgroundColor:'rgba(95, 194, 95, 0.1)' 
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Find recipes"
            inputProps={{ 'aria-label': 'Search' }}
            input onChange={(e) => setInput(e.target.value)} 
          />
              <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <AdvancedFilter>
          <label htmlFor='advancedFilter'>Filter
            <input onChange={onHandleFilter} checked={isChecked} name="advancedFilter" id='advancedFilter' type='checkbox'/>
          </label>
      </AdvancedFilter>
      </Box>
    
  :

  <Box sx={{ display: {xs: 'block', sm:'none'}}}>
      <motion.div
        //animation requires a unique key to work 
        key="searchNewSmall" Location={location}
        // start animation at 50% on y axis, invisible and at half scale
        initial={{y:'50%', opacity: 0, scale: 0.5}}
        // animate to original position with opacity of 1 and original scale
        animate={{y:0, opacity: 1, scale: 1}}
        // exit animation, return to original y axis animation (from enter) with opacity of 0 and a shorter duration.
        exit={{
          y:'50%', opacity: 0, 
          transition: {duration: 2}, 
        }}
        // default transition (will be used unless specified otherwise, i.e exit animation above)
        transition={{duration: 0.2, ease: "easeOut"}}
      >
        <AdvancedFilter>
            <label htmlFor='advancedFilter'> Cancel
              <input onChange={onHandleFilter} checked={isChecked} name="advancedFilter" id='advancedFilter' type='checkbox'/>
            </label>
        </AdvancedFilter>
        <AdvancedSearch/>
      </motion.div>
  </Box>

  }
  </AnimatePresence>
      <Wrapper>
      <Box sx={{ 
        display: { 
          xs:'block', sm: 'none', position: 'fixed', bottom: 0, left: 0, right: 0
          }, 
        flexGrow: 1,
      }}>
        <BottomNavigation
          sx={{
            bgcolor:'#5FC25F',
          }}
          showLabels
          // value={value}
          onChange={(event, newValue) => {
            // setValue(newValue);
          }}
        >
        
            <BottomNavigationAction 
            sx={{color: '#F4FBF4'}} 
            label="Discover" 
            icon={
              <NavLink to='/'>
              <RestaurantMenuIcon sx={{color: '#F4FBF4'}}/>
              </NavLink>
              }
            />


          <BottomNavigationAction 
          sx={{color: '#F4FBF4'}} 
          label="Saved Recipes" 
          icon={
            <NavLink to='/user/recipes'>
              <FavoriteIcon sx={{color: '#F4FBF4'}}/>
            </NavLink>
            }
          />

          <BottomNavigationAction 
          sx={{color: '#F4FBF4'}} 
          label="Meal Plan" 
          icon={
            <NavLink to='/user/mealplan'>
              <LocalGroceryStoreIcon sx={{color: '#F4FBF4'}} />
            </NavLink>
            }
          />
          <BottomNavigationAction 
          sx={{color: '#F4FBF4'}} 
          label="Account" 
          icon={<AccountCircleIcon 
            sx={{color: '#F4FBF4'}} />
            } 
          />
        </BottomNavigation>
      </Box> 
      </Wrapper>
    </ThemeProvider>

  </>
  );
}

const Wrapper = styled.div`
  z-index: 4;
  position: absolute;
`;

