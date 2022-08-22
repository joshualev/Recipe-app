import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import { ThemeProvider, createTheme} from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Card, CardMedia, Button } from '@mui/material';

const UserRecipe = (props) => {
const { recipeID } = useParams();
const recipe = props.recipes.find((recipe) => recipe._id === recipeID)
console.log(recipe)

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
  
  // Animation used to stagger children on page enter
  const variants = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  
  return (
    <div>
        <motion.div
        className='children'
        variants={variants}
        initial='hidden'
        animate='show'
      >
          <ThemeProvider theme={theme} >
          <motion.div variants={item}>
            <Container disableGutters maxWidth="sm" sx={{ pb: '1rem' }}>
            <Card sx={{ maxWidth:'xs', backgroundColor:'rgba(95, 194, 95, 0.2)' }}>
                <ImageStyled src={recipe.imageURL} alt={recipe.title} />
                <Typography variant="h6" align="center" fontWeight='900'>
                  {recipe.title}
                </Typography>
               
              <CardMedia sx={{justifyContent:'center',display:'flex', pb:'0.7rem', pt:'0.2rem'}}>
                  <Button sx={{marginRight: '1rem', width:'150px'}} color='primary' size='small' variant='contained'>
                    Add to meal plan
                  </Button>
                  <Button sx={{width:'150px'}} color='warning' size='small' variant='contained'>
                    Remove from list
                  </Button>
                  </CardMedia>
              </Card>
            </Container>
            <Container maxWidth="sm" align='center'>
                <Typography variant='h2' display='inline-block' justifyContent='center' mr='1rem' pb='1rem' fontSize="0.8rem">
                  👍 10000 people like this
                </Typography>
                <Typography variant='h2' display='inline-block' justifyContent='center' mr='1rem' pb='1rem' fontSize="0.8rem">
                   ⏰ Ready in 10000 minutes <br/>
                </Typography>
                <Typography variant='h2' display='inline' justifyContent='center' pb='1rem' fontSize="0.8rem">
                  💰 $100000 per serve
                </Typography>
              </Container>
          </motion.div>

  
          <Container disableGutters maxWidth="sm" sx={{ pb: '1rem' }}>
          <motion.div variants={item}>
            <Accordion sx={{backgroundColor: 'rgba(95, 194, 95, 0.2)'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" fontSize='1rem'>Ingredients</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography variant='h4' fontSize="0.8rem">
                Makes 10000 serves
              </Typography>
              <ul>
              {recipe.ingredients.map((obj) => {
                return(
                  <li key={obj.id}>
                   <Typography display='inline' variant='h2' fontSize="0.8rem">
                      {obj.original}
                    </Typography>
                  </li>  
                )
              })}
              </ul>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          <motion.div variants={item}>
            <Accordion sx={{backgroundColor: 'rgba(95, 194, 95, 0.2)'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6" fontSize='1rem'>Instructions</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                {recipe.instructions.map((obj) => {
                  return(
                    <ListStyled>
                      <Typography display='inline' variant='h5' fontSize="0.9rem">
                        Step {obj.number}:
                      </Typography>
                      <Typography display='inline' variant='h2' fontSize="0.8rem" sx={{ml:'0.2rem'}}>
                        {obj.step}
                      </Typography>
                    </ListStyled>
                  )
                })}      
              </ul>
              </AccordionDetails>
            </Accordion>
          </motion.div>
          
          <motion.div variants={item}>
            <Accordion sx={{backgroundColor: 'rgba(95, 194, 95, 0.2)'}}>
              <AccordionSummary sx={{ margin:'0 auto'}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                 <Typography variant="h6" fontSize='1rem'>Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='h2' fontSize="0.8rem">
                <div>{recipe.description}</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
          </Container>
          </ThemeProvider>
        </motion.div>
    </div>
  )
}


const ImageStyled = styled.img`
  width: 300px;
  display: flex;
  margin: 0 auto;
  border-radius: 5px;
  padding: 1rem; 
`;

const ListStyled = styled.li`
  list-style: none;
`;

export default UserRecipe