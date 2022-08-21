import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const SearchResults = () => {
  const params = useParams();
  const [searchResult, setSearchResult] = useState([]);

  const getSearch = async (foodToSearch) => {
    const response = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${foodToSearch}`
    );
    const data = await response.json();
    setSearchResult(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    getSearch(params.search)
    console.log()
  }, [params.search])
  

  return (
    <>
      <h2>Search results for {params.search}</h2>
      <Grid
      // Fade in on page enter
      animate={{x:0, opacity:1}}
      initial={{x:-500, opacity:0}}
      // Fade out on leaving page
      exit={{opacity:0}}
      // animation duration(s)
      transition={{duration: 1}}
    >
        {searchResult.map((recipe) => {
          return(
            
            <Card key={recipe.id}>
              <Link to={'/recipe/'+ recipe.id}>
                <img src={recipe.image}/>
                <h4>{recipe.title}</h4>
              </Link>
            </Card>
       
          )
        })}
      </Grid>
    </>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a { 
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 0.5rem;
  }
`;

export default SearchResults