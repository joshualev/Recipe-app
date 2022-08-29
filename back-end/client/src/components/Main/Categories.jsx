import {React } from 'react';
import { Link } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Heading} from '../../globalStyles'
import {Wrapper,Card,Gradient} from './MainStyles.js';

import african from './cuisinePhotos/african.png'
import american from './cuisinePhotos/american.png'
import cajun from './cuisinePhotos/cajun.png'
import carribean from './cuisinePhotos/carribean.png'
import asian from './cuisinePhotos/asian.png'
import easternEurope from './cuisinePhotos/easternEurope.png'
import europen from './cuisinePhotos/european.png'
import french from './cuisinePhotos/french.png'
import german from './cuisinePhotos/german.png'
import greek from './cuisinePhotos/greek.png'
import indian from './cuisinePhotos/indian.png'
import irish from './cuisinePhotos/irish.png'
import japanese from './cuisinePhotos/japanese.png'
import korean from './cuisinePhotos/korean.png'
import latinAmerican from './cuisinePhotos/latinAmerican.png'
import mediterranean from './cuisinePhotos/mediterranean.png'
import mexican from './cuisinePhotos/mexican.png'
import middleEastern from './cuisinePhotos/middleEastern.png'
import southern from './cuisinePhotos/southern.png'
import spanish from './cuisinePhotos/spanish.png'
import thai from './cuisinePhotos/thai.png'
import vietnamese from './cuisinePhotos/vietnamese.png'
import styled from 'styled-components';

const Categories = () => {
  const cuisineCategories = [
      {
        cuisine: 'African',
        imgURL: african,
      },
      {
        cuisine: 'American',
        imgURL: american,
      },
      {
        cuisine: 'Cajun',
        imgURL: cajun,
      },
      {
        cuisine: 'Caribbean',
        imgURL: carribean,
      },
      {
        cuisine: 'Chinese',
        imgURL: asian,
      },
      {
        cuisine: 'Eastern European',
        imgURL: easternEurope,
      },
      {
        cuisine: 'European',
        imgURL: europen,
      },
      {
        cuisine: 'French',
        imgURL: french,
      },
      {
        cuisine: 'German',
        imgURL: german,
      },
      {
        cuisine: 'Greek',
        imgURL: greek,
      },
      {
        cuisine: 'Indian',
        imgURL: indian,
      },
      {
        cuisine: 'Irish',
        imgURL: irish,
      },
      {
        cuisine: 'Japanese',
        imgURL: japanese,
      },
      {
        cuisine: 'Korean',
        imgURL: korean,
      },
      {
        cuisine: 'Latin American',
        imgURL: latinAmerican,
      },
      {
        cuisine: 'Mediterranean',
        imgURL: mediterranean,
      },
      {
        cuisine: 'Mexican',
        imgURL: mexican,
      },
      {
        cuisine: 'Middle Eastern',
        imgURL: middleEastern,
      },
      {
        cuisine: 'Southern',
        imgURL: southern,
      },
      {
        cuisine: 'Spanish',
        imgURL: spanish,
      },
      {
        cuisine: 'Thai',
        imgURL: thai,
      },
      {
        cuisine: 'Vietnamese',
        imgURL: vietnamese,
      },   
]

  return (
  <div>
    {/* Map popular recipe options */}
        <Wrapper>
          <Heading>Cuisine</Heading>
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
          {cuisineCategories.map((category) => {
            return(
              <SplideSlide key={category.cuisine}>
          
                <Card>
                  <Link to={'/cuisine/' + category.cuisine}>
                    <p>{category.cuisine}</p>
                    <img
                      src={`${category.imgURL}?w=248&fit=crop&auto=format`}
                      alt={category.cuisine}
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

const MacrosContainer = styled.div`
  display: inline;
  justify-content: center;
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
`

export default Categories