import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography} from '@mui/material'
import {motion} from 'framer-motion';


const UserRecipes = ({recipes, handleDeleteRecipe}) => {
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
  
  return (
    <motion.div
    className='children'
    variants={variants}
    initial='hidden'
    animate='show'
  >
    <motion.div variants={item}>
    <Container sx={{ py: 4 }} maxWidth="md">
    <Grid container spacing={1}>
      {recipes.map((recipe) => (
        <Grid item key={recipe._id} xs={12} sm={6} md={4}>  
       
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', m: '0.5rem',borderRadius:'15px' }}
          >
          
            <CardContent sx={{m:'auto'}}>
              <Typography variant='h5' fontSize='1rem'>
                {recipe.title}
              </Typography>
            </CardContent>    
            <Link style={{textDecoration: 'none'}} to={`/user/recipes/${recipe._id}`}>
            <CardMedia
              component="img"
              image={recipe.imageURL}
              alt={recipe.title}
              sx={{borderRadius:'5px', width:'90%', height:'90%', m:'0.8rem auto'}}
            />
             </Link>
    
            <CardActions sx={{ margin: '0 auto', mb:'0.5rem'}}>
              <Button variant='contained' 
                sx={{ padding:'1.25rem',width:'100%', fontSize:'0.72rem', height: '2rem', backgroundColor:'rgba(95, 194, 95, 0.9)', borderRadius:'5px'}} 
              >
                Add to meal plan
              </Button>
              <Button 
                variant='contained' 
                sx={{ padding:'1.25rem', height: '2rem', fontSize:'0.72rem',backgroundColor:'rgba(95, 194, 95, 0.9);', borderRadius:'5px'}} 
                size="small"
                onClick={()=> {handleDeleteRecipe(recipe)}}
              >
                  Delete
              </Button>
            </CardActions>
          </Card>
   
        </Grid>
      ))}
    </Grid>
  </Container>
  </motion.div>
</motion.div>
  )
}

export default UserRecipes