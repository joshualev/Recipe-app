import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Container, Grid, Card, CardMedia, CardContent, Typography} from '@mui/material'
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActions from '@mui/material/CardActions';
const SearchResults = ({handleFormSubmit}) => {
  const params = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const getSearch = async (foodToSearch) => {
    const response = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${foodToSearch}&addRecipeNutrition=true`
    );
    const data = await response.json();
    setSearchResult(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    getSearch(params.search)
    console.log(searchResult)
  }, [params.search])
  
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
    <>
    {searchResult &&
    <motion.div
    className='children'
    variants={variants}
    initial='hidden'
    animate='show'
  >
    
    <motion.div variants={item}>
    <Container sx={{ py: 4 }} maxWidth="md" >
    <Grid container spacing={3}>
      {searchResult.map((recipe) => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>  
         <Link style={{textDecoration: 'none'}} to={`/recipe/${recipe.id}`}>
          <Card
            sx={{height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', borderRadius:'15px', transition: 'transform 0.3s, border 0.3s',
            '&:hover': {
              transform: 'translateY(-2px)',
            }, }}
          >
          
            <CardContent sx={{width: '100%', height:'100%', backgroundColor:'rgba(95, 194, 95, 0.1)', boxShadow:'0px 0.5px 0.5px rgba(95, 194, 95, 0.1)'}}>
           
              <Typography sx ={{mr:'1.8rem', color:'black', textShadow:'0px 4px 3px rgba(0,0,0.0,0.1)'}}variant='h5' fontWeight='700' fontSize='1.2rem'>
                {recipe.title}
              </Typography>
           
            </CardContent>    
              <StarContainer>
                ⏰ {recipe.readyInMinutes} minutes 

               
              </StarContainer>
           
            <CardMedia
              component="img"
              image={recipe.image}
              alt={recipe.title}
              sx={{borderRadius:'5px', width:'90%', height:'90%', m:'0.8rem auto'}}
            />
          
    
             <Typography level="body2" sx={{m:'auto', mt: 0.5, mb: 2 }}>
              {Math.ceil(recipe.nutrition.nutrients[0].amount)} calories 
              <Typography sx={{m:'auto', display:'flex', justifyContent:'center', fontSize:'0.8rem'}}>{recipe.nutrition.weightPerServing.amount}{recipe.nutrition.weightPerServing.unit} serving</Typography>
            </Typography>

            <MacrosContainer>
              {recipe.nutrition.nutrients.map((macro) => {
                if (macro.name === 'Protein') {
                  return(
                  <div>{Math.ceil(macro.amount)}p </div>
                  )
                }
              })}
              {recipe.nutrition.nutrients.map((macro) => {
                if (macro.name === 'Carbohydrates') {
                  return(
                  <div>{Math.ceil(macro.amount)}c </div>
                  )
                }
              })}
              {recipe.nutrition.nutrients.map((macro) => {
                if (macro.name === 'Fat') {
                  return(
                  <div>{Math.ceil(macro.amount)}f </div>
                  )
                }
              })}
              
            </MacrosContainer>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>
  </motion.div>
</motion.div>
}
</>
  );
}

const MacrosContainer = styled.div`
  display: flex;
  margin: 0 auto;
  background: rgba(95, 194, 95, 0.7);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0 0.3rem;
  boxShadow: 0px 0.5px 0.5px rgba(95, 194, 95, 0.1);

  div {
    display: inline-block;
    padding: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

const StarContainer = styled.div`
  display: flex;
  margin: 0.4rem 0 0 1rem;
  font-size: 0.8rem;
  font-weight: 200;

  IconButton{
    
  }
`
const AddContainer = styled.div`
  display: flex;
  // postion: absolute;
  justifyContent: start;
  z-index: 10;
`

export default SearchResults

