import * as React from 'react';
import { useState } from 'react'
import {useNavigate, Link, NavLink} from 'react-router-dom'
import { ThemeProvider, createTheme} from '@mui/material/styles';
import styled from 'styled-components'
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
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/'+ input)
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
          <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
            My Recipes
          </Button>
          <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
            Groceries
          </Button>
          <Button color="neutral" aria-label="button" sx={{ mr: 2 }}>
            Account
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{padding:1}}/>
    </Stack>
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
    </Box>
  </ThemeProvider>          


  {/* Bottom Navbar */}
  <ThemeProvider theme={SecondaryTheme} >
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
    </Box>
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
        label="My Recipes" 
        icon={
          <FavoriteIcon sx={{color: '#F4FBF4'}}/>
          }
        />

        <BottomNavigationAction 
        sx={{color: '#F4FBF4'}} 
        label="Groceries" 
        icon={
          <LocalGroceryStoreIcon sx={{color: '#F4FBF4'}} />
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
`

