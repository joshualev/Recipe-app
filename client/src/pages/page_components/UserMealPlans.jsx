
import { React, useState } from 'react'
import {motion} from 'framer-motion';

import styled from 'styled-components';
import {Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

  const UserMealPlan = ({apiKey, handleDeleteMealPlan, mealPlan, handleCreateMealPlanSubmit}) => {
    const [generatedPlan, setGeneratedPlan] = useState(null);
    const [input, setInput] = useState(2000);
    
    const getMeals = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?targetCalories=${input}&apiKey=${apiKey}`
      );
      const data = await response.json()
      setGeneratedPlan(data)
      console.log('data', data)
      console.log('generated plan', generatedPlan)
    }

  const handleSubmit = (e) => {
    e.preventDefault()      
    getMeals()
    handleCreateMealPlanSubmit(generatedPlan)
  }

  const handleChange = (e) => {
    setInput([e.target.name] = e.target.value)
  }

  return (  
    <>
    <Container2>
      <form onSubmit={handleSubmit}>
        <StyledInputText type='number' name='input' onChange={handleChange} placeholder='Target calories'></StyledInputText>
        <SubmitButton type="submit" value="Generate Meal Plan"/>
      </form>
    </Container2>

    <MealPlanContainer>
      <Box sx={{ flexGrow: 1}}>
          <Grid container alignItems="center"justifyContent="center" gap={3}>
          {Array.from(mealPlan).map((meal) => {
          return(   
            <motion.div
            initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.5}}
            >
              <Grid item key={meal._id}>
                  <ItemDiv>
                  <Link to={`/user/mealplan/${meal._id}`}>
                      <Header>
                        Meal Plan
                      </Header>
                      <MealNutrition>
                      <div className='macros'>
                        <div className='protein'>Average Calories per day
                          <p>{Math.round(meal.week.monday.nutrients.calories)}</p>
                        </div>   
                      </div>
                    </MealNutrition>
                    </Link>
                    <RemoveFromList onClick={()=> {handleDeleteMealPlan(meal)}}>Remove</RemoveFromList>
                  </ItemDiv>
                </Grid>
    
          </motion.div>
                )
          })}
        </Grid>
      </Box> 
    </MealPlanContainer>
    </>
  )
}

const MealPlanContainer = styled.div`
  margin: 3rem;
  justify-content: center;

  a {
    color: #265EBA;
    text-decoration: none;
    transition: 300ms;
    &:hover {
      transform: scaleX(1.03) scaleY(1.03);
      color: #132F5D;
    }
  }
`;

const SubmitButton = styled.input`
  margin-top: 1rem;
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

const ItemDiv = styled.div`
  padding: 1rem;
  text-align: center;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 5px;
  text-shadow: 0px 4px 3px rgba(0,0,0.0,0.1);
  box-shadow: 0px 0.5px 0.5px rgba(95, 194, 95, 0.1);
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight:900;
  color: black;
`;

const MealNutrition = styled.div`
  .macros {
    display: flex;
    margin-top: 1rem;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .protein,
  .carbohydrates,
  .fats {
    margin: 0.2rem auto;
  }

  p {
    font-size: 0.7rem;
    font-weight: 600;
    width: 50px;
    margin: 0.4rem auto;
    padding: 0.2rem;
    border-radius: 5px;

    background-color: rgba(95, 194, 95, 0.2);
  }
`;

const Container2 = styled.div`
  margin: 3rem auto;
  width: 80%;
  // background-color: rgba(95, 194, 95, 0.3);
  border-radius: 25px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: flex;
  }
`;

const StyledInputText = styled.input`
  position: relative;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 0.2rem #ccc;
  transition: 300ms ease-in-out; 
  &:hover {
    transform: scaleX(1.03) scaleY(1.03)
  }
`;

const RemoveFromList = styled.div`
  margin: 1rem auto;
  text-align: center;
  background-color: #D83818;
  border: 1px solid #6C1C0C;
  padding: 0.5rem;
  width: 80%;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 1px black;
  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scaleX(1.03) scaleY(1.03);
    background-color: #C83416;
  }
`;
export default UserMealPlan
