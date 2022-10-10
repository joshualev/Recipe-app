import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import {Heading} from '../../globalStyles'
import {Wrapper,Card,Gradient} from './MainStyles.js';

function Snack({apiKey}) {
  const [snack, setSnack] = useState([]);
  const getsnack = async () => {
    const check = localStorage.getItem('snack')
    
    // if data exists in local storage, do not fetch from API
    if (check) {
      // instead, setPopular with that data
      setSnack(JSON.parse(check));
    } else {
      // else if no local storage data, fetch api as normal
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=snack`
        );
        const data = await res.json();

        localStorage.setItem('snack', JSON.stringify(data.recipes));
        setSnack(data.recipes)
        console.log(data);
    };
  };

  useEffect(() => {
    getsnack()
  },[]);

  return (
    <div>
    {/* Map popular recipe options */}
        <Wrapper>
          <Heading>Snacks</Heading>
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
          {snack.map((recipe) => {
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


export default Snack