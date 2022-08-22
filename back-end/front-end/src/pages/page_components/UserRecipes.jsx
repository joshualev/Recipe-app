import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography} from '@mui/material'
import {motion} from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';

const UserRecipes = ({recipes}) => {
console.log(recipes)

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
            <CardMedia
              component="img"
              image={recipe.imageURL}
              alt={recipe.title}
              sx={{borderRadius:'10px', width:'90%', height:'90%', m:'0.8rem auto'}}
            />
    
            <CardActions sx={{m:'0 auto', pb:'0.8rem'}}>
              <Link style={{textDecoration: 'none'}} to={`/user/recipes/${recipe._id}`}>
                <Button variant='contained' sx={{mr:'1.25rem', padding:'1.25rem',width:'100px', height: '2rem', backgroundColor:'rgba(95, 194, 95, 0.9)', borderRadius:'15px'}} >View</Button>
              </Link>
              <Button variant='contained' sx={{ padding:'1.25rem', width:'100px', height: '2rem', backgroundColor:'rgba(95, 194, 95, 0.9);', borderRadius:'15px'}} size="small">Delete</Button>
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