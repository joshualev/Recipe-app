import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import { ThemeProvider, createTheme} from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Card, CardMedia } from '@mui/material';

const Recipe = ({handleFormSubmit, apiKey}) => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState({});
  const [nutritionData, setNutritionData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleFormSubmit({...recipeData, ...nutritionData})
  }

  const fetchRecipe = async () => {
    const response = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`)
    const data = await response.json()
    setRecipeData(data);
      // console.log('data', data)
  }


  const fetchNutrition = async () => {
    const response = await fetch (`https://api.spoonacular.com/recipes/${params.name}/nutritionWidget.json?apiKey=${apiKey}`)
    const nutritionInfo = await response.json()
    setNutritionData(nutritionInfo);
  }

  useEffect(() => {
    fetchRecipe()
    fetchNutrition()
  },[params.name]);

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
      {recipeData.image &&
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
                <ImageStyled src={recipeData.image} alt={recipeData.title} />
                <Typography variant="h6" align="center" fontWeight='900'>
                  {recipeData.title}
                </Typography>
               
              <CardMedia sx={{justifyContent:'center',display:'flex', pb:'0.7rem', pt:'0.2rem'}}>
     
                <form onSubmit={handleSubmit }>
                  <AddToListButton type='submit' color='primary' size='small' variant='contained'>
                    Add to my list
                  </AddToListButton>
                </form>

              </CardMedia>
              </Card>
            </Container>
            <Container maxWidth="sm" align='center'>
                <Typography variant='h2' display='inline-block' justifyContent='center' mr='1rem' pb='1rem' fontSize="0.8rem">
                  👍 {recipeData.aggregateLikes} people like this
                </Typography>
                <Typography variant='h2' display='inline-block' justifyContent='center' mr='1rem' pb='1rem' fontSize="0.8rem">
                   ⏰ Ready in {recipeData.readyInMinutes} minutes <br/>
                </Typography>
                <Typography variant='h2' display='inline' justifyContent='center' pb='1rem' fontSize="0.8rem">
                  💰 ${(recipeData.pricePerServing / 100).toFixed(2)} per serve
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
                Makes {recipeData.servings} serves
              </Typography>
              <ul>
              {recipeData.extendedIngredients.map((obj) => {
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
              {recipeData.analyzedInstructions.map((obj) => 
                obj.steps.map((obj2, index) => {
                  return (
                    <li key={obj2.step}>
                      <Typography display='inline' variant='h5' fontSize="0.9rem">Step {index + 1}: </Typography>
                      <Typography display='inline' variant='h2' fontSize="0.8rem">{obj2.step}</Typography> 
                    </li>   
                  )})       
                )}
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
                <div dangerouslySetInnerHTML={{__html: recipeData.summary}}></div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
          </Container>
          </ThemeProvider>
        </motion.div>
      }
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

const AddToListButton = styled.button`
  margin-top: 1rem;
  background-color: #82B388;
  border: 1px solid #78AC7E;
  padding: 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 1px black;
  box-shadow: 0 0 0.01rem black;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scaleX(1.03) scaleY(1.03);
    background-color: #8DB992;
  }
`;


export default Recipe