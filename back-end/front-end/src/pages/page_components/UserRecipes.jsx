import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography} from '@mui/material'
import {motion} from 'framer-motion';
import styled from 'styled-components';
const UserRecipes = ({recipes, handleDeleteRecipe, authorised}) => {
// // Animation used to stagger children on page enter
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

const replaceStr = (str) => {
  const protein = str.replace('g','p')
  return protein

}
  return (
    <motion.div
    className='children'
    variants={variants}
    initial='hidden'
    animate='show'
  >
    {authorised 
    ?
    <motion.div variants={item}>
    <Container sx={{ py: 4 }} maxWidth="md">
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item key={recipe._id} xs={12} sm={6} md={4}>  


        <Link style={{textDecoration: 'none'}} to={`/user/recipes/${recipe._id}`}>
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
                ⏰ {recipe.cookTime} minutes 

               
              </StarContainer>
           
            <CardMedia
              component="img"
              image={recipe.imageURL}
              alt={recipe.title}
              sx={{borderRadius:'5px', width:'90%', height:'90%', m:'0.8rem auto'}}
            />
             <Typography level="body2" sx={{m:'auto', mt: 0.5, mb: 2 }}>
              {recipe.calories}ilocalories
            </Typography>
            {/* <AddToMenu >Add to meal plan</AddToMenu> */}
            <RemoveFromList onClick={()=> {handleDeleteRecipe(recipe)}}>Remove</RemoveFromList>
            <MacrosContainer>
                <div>{recipe.protein} pro</div>
                <div>{recipe.carbohydrates} carb</div>
                <div>{recipe.fats} fat</div>
            </MacrosContainer>
          </Card>
          </Link>
   
        </Grid>
      ))}
    </Grid>
  </Container>
  </motion.div>
  :
  <Container2>
    <StyledDiv1>You need an account to save recipes</StyledDiv1>
      <Link to='/login' style={{textDecoration:'none'}}>
        <StyledDiv2>Log in</StyledDiv2>
      </Link>
      <Link to='/register' style={{textDecoration:'none'}}>
        <StyledDiv2>Register</StyledDiv2>
      </Link>
  </Container2>      
  }
</motion.div>
  )
}

export default UserRecipes

const Container2 = styled.div`
  margin: 2rem auto;
  width: 80%;
  // background-color: rgba(95, 194, 95, 0.3);
  border-radius: 25px;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const StyledDiv1 = styled.div`

  color:black;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;
const StyledDiv2 = styled.div`
  width: 6rem;
  margin: 1.2rem;
  text-align: center;
  margin-top: 1rem auto;
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

`;
const AddContainer = styled.div`
  display: flex;
  // postion: absolute;
  justifyContent: start;
  z-index: 10;
`;

const AddToMenu = styled.div`
width: 8rem;
margin: 1.2rem auto;
text-align: center;
margin-top: 1rem auto;
background-color: #82B388;
border: 1px solid #78AC7E;
padding: 1.2rem;
border-radius: 5px;
font-size: 1rem;
font-weight: 600;
color: white;
text-shadow: 0 0 1px black;
transition: 300ms ease-in-out;

&:hover {
  transform: scaleX(1.03) scaleY(1.03);
  background-color: #8DB992;
}
`;

const RemoveFromList = styled.div`
width: 8rem;
margin: auto;
margin-bottom: 1rem;
text-align: center;
background-color: #D83818;
border: 1px solid #6C1C0C;
padding: 1.2rem;
border-radius: 5px;
font-size: 1rem;
font-weight: 600;
color: white;
text-shadow: 0 0 1px black;
transition: 300ms ease-in-out;

&:hover {
  transform: scaleX(1.03) scaleY(1.03);
  background-color: #C83416;
}
`;

