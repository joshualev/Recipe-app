import React from 'react'
import { useEffect, useState } from 'react';
  // import styled from 'styled-components';
import {Wrapper,Card,Gradient} from './MainStyles.js';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import {Heading} from '../../globalStyles'

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
   
    const getlunch = async () => {
      const check = localStorage.getItem('lunch')
      
      // if data exists in local storage, do not fetch from API
      if (check) {
        // instead, setPopular with that data
        setLunch(JSON.parse(check));
      } else {
        // else if no local storage data, fetch api as normal
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=lunch`
          );
          const data = await res.json();
  
          localStorage.setItem('lunch', JSON.stringify(data.recipes));
          setLunch(data.recipes)
          console.log(data);
      };
    };
  
    useEffect(() => {
      getlunch()
    },[]);
  
    return (
      <div>
      {/* Map popular recipe options */}
          <Wrapper>
            <Heading>Lunch</Heading>
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
            {lunch.map((recipe) => {
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

export default Lunch