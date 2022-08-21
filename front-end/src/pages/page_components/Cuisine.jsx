import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

const Cuisine = () => {
  const params = useParams()

  const [cuisine, setCuisine] = useState([])

  const getCuisine = async (category) => {
    const response = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${category}`
    );
    const data = await response.json();
    setCuisine(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])
  

  return (
    <>
    {/* Motion.div component added in styled-components below */}
    <Grid
      // Fade in on page navigation
      animate={{opacity:1}}
      initial={{opacity:0}}
      // Fade out on leaving page
      exit={{opacity:0}}
      // animation duration(s)
      transition={{duration: 0.8, ease: 'easeOut'}}
    >
      {cuisine.map((recipe) => {
        return(
          <Card key={recipe.id}>
            <Link to={'/recipe/' + recipe.id}>
              <img src={recipe.image}/>
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        )
      })}

    </Grid>
    </>
  )
}

export default Cuisine

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px 1px 5px black;
    transition: 300ms;
  &:hover{
    transform: scaleX(1.02) scaleY(1.02);
  }
  }
  a { 
    text-decoration: none;
  }
  h4 {
    text-align: center;
    color: grey;
    font-size: 1rem;
  }
`;