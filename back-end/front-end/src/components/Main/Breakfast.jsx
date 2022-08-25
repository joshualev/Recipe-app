import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import {Heading} from '../../globalStyles'
import {Wrapper,Card,Gradient} from './MainStyles.js';

function Breakfast() {
  const [breakfast, setBreakfast] = useState([]);
 
  const getbreakfast = async () => {
    const check = localStorage.getItem('breakfast')
    
    // if data exists in local storage, do not fetch from API
    if (check) {
      // instead, setPopular with that data
      setBreakfast(JSON.parse(check));
    } else {
      // else if no local storage data, fetch api as normal
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=breakfast`
        );
        const data = await res.json();

        localStorage.setItem('breakfast', JSON.stringify(data.recipes));
        setBreakfast(data.recipes)
        console.log(data);
    };
  };

  useEffect(() => {
    getbreakfast()
  },[]);

  return (
    <div>
    {/* Map popular recipe options */}
        <Wrapper>
          <Heading>Breakfast</Heading>
          <Splide options={{
            breakpoints: {
              490: {
                perPage:2,
                width: '100%',
              },
              495: {
                perPage: 2,
              },
              500: {
                perPage: 3,
              },
              700: {
                perPage: 3,
              },
              900: {
                perPage: 4
              },
              2000: {
                perPage: 6
              },
              2200: {
                perPage: 8
              }
            },
            // perPage: 4,
            arrows: false,
            pagination: true,
            drag: 'free',
            gap: '0.2rem',
            width: '100%',
          }}>
          {breakfast.map((recipe) => {
            
            return(
              
              <SplideSlide key={recipe.id}>
          
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img
                      src={`${recipe.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={recipe.title}
                    />
                    <Gradient/>    
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
  </div>
  )
}


export default Breakfast