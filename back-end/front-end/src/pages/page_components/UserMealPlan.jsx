
import { React, useEffect, useState } from 'react'
import {motion} from 'framer-motion';

import styled from 'styled-components';
import {Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

  const UserMealPlan = ({authorised, mealPlan, handleCreateMealPlanSubmit, handleUpdateMealPlan}) => {
    const [generatedPlan, setGeneratedPlan] = useState({});
    const [input, setInput] = useState(2000);
    
    const getMeals = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?targetCalories=2500&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json()
      setGeneratedPlan(data)
      console.log('data', data)

    }


    useEffect(() => {
      getMeals()
    }, [])


  const handleSubmit = (e) => {
    e.preventDefault()      

    handleUpdateMealPlan('630764b37e711f167204ff9c', generatedPlan)
    console.log('INPUT', input)
    // setInput('')
  }


  const handleChange = (e) => {
    setInput([e.target.name] = e.target.value)
  }

  

  return (
    
    <>
{/* {authorised && */}
 <div>
      <form onSubmit={handleSubmit}>
        {/* <input type='number' name='input' onChange={handleChange} placeholder='Target calories'></input> */}
        <SubmitButton type="submit" value="Generate Meal Plan"/>
      </form>
    
    {mealPlan &&
     <motion.div
     initial={{ y: 100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{duration: 0.5}}
   >
  
    <MealPlanContainer>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
  {/* MONDAY */}

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Monday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.monday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.monday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.monday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.monday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.monday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.monday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.monday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.monday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.monday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.monday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>

{/* TUESDAY */}
   
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Tuesday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.tuesday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.tuesday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.tuesday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.tuesday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.tuesday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>

                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.tuesday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.tuesday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.tuesday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.tuesday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.tuesday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>

{/* WEDNESDAY */}
    <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Wednesday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.wednesday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.wednesday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.wednesday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.wednesday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.wednesday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.wednesday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.wednesday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.wednesday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.wednesday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.wednesday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>
{/* THURSDAY */}
    <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Thursday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.thursday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.thursday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.thursday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.thursday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.thursday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.thursday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.thursday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.thursday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.thursday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.thursday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>
  {/* FRIDAY */}
    <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Friday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.friday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.friday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.friday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.friday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.friday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.friday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.friday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.friday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.friday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.friday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>
  {/* SATURDAY */}
    <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Saturday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.saturday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.saturday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.saturday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.saturday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.saturday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.saturday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.saturday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.saturday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.saturday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.saturday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>
  {/* SUNDAY */}
    <Grid item xs={12} sm={6} md={4} lg={4}>
          <ItemDiv>
              <Header>
                Sunday
              </Header>
            <MealNutrition>
                <div className='macros'>
                  <div className='protein'>Calories
                    <p>{Math.round(mealPlan[0].week.sunday.nutrients.calories)}</p>
                  </div>
                  <div className='protein'>Protein
                    <p>{Math.round(mealPlan[0].week.sunday.nutrients.protein)}</p>
                  </div>
                  <div className='carbohydrates'>Carbohydate
                    <p>{Math.round(mealPlan[0].week.sunday.nutrients.carbohydrates)}</p>
                  </div>
                  <div className='fats'>Fat
                    <p>{Math.round(mealPlan[0].week.sunday.nutrients.fat)}</p>
                  </div>
                </div>
              </MealNutrition>
              <Meals>
                <Meal className='breakfast'>
                  <MealHeader>
                    Breakfast
                  </MealHeader>
                  <MealContent>
                      <h5>{mealPlan[0].week.sunday.meals[0].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.sunday.meals[0].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='lunch'>
                  <MealHeader>
                    Lunch
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.sunday.meals[1].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                        <a href={mealPlan[0].week.sunday.meals[1].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
                  <Meal className='dinner'>
                  <MealHeader>
                    Dinner
                  </MealHeader>
                  <MealContent>
                    <h5>{mealPlan[0].week.sunday.meals[2].title}</h5>
                  </MealContent>
                  <MealContent>
                    <div className='calories'>
                        <h3>
                          <a href={mealPlan[0].week.sunday.meals[2].sourceUrl}>View source</a>
                        </h3>
                    </div>
                  </MealContent>
                  </Meal>
              </Meals>
          </ItemDiv>
        </Grid>
        </Grid> 
    </Box> 
    </MealPlanContainer>
  </motion.div>
  }
  </div>
  {/* } */}
{/* 
{!authorised && */}
  {/* <Container2>
  <StyledDiv1>You need an account to save recipes</StyledDiv1>
    <Link to='/login' style={{textDecoration:'none'}}>
      <StyledDiv2>Log in</StyledDiv2>
    </Link>
    <Link to='/register' style={{textDecoration:'none'}}>
      <StyledDiv2>Register</StyledDiv2>
    </Link>
</Container2>    */}
  {/* } */}
    </>
    
  )
}
const MealPlanContainer = styled.div`
margin-top: 2rem;

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
// background-color: rgba(0,0,0,0.1);
text-shadow: 0px 4px 3px rgba(0,0,0.0,0.1);
box-shadow: 0px 0.5px 0.5px rgba(95, 194, 95, 0.1);
`;

const Header = styled.div`
font-size: 2rem;
font-weight:900;
color: black;
`;

const Meals = styled.div`
// display: flex-column;

`;

const Meal = styled.div`
  padding: 0.5rem;
  margin-top: 0.2rem;
  background-color: rgba(95, 194, 95, 0.1);
  border-radius: 5px;
`;

const MealHeader = styled.div`
  font-size: 1.4rem;
  background-color: rgba(95, 194, 95, 0.6);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 90%;
  margin: 0 auto;
  padding: 0.4rem;
`;

const MealContent = styled.div`
height: 50px;
h5 {
  font-size: 1rem;
  width: 80%;
  margin: 0.5rem auto;
  padding-bottom: 0.4rem;
}
  .calories {
    border-radius: 50%;
    display: column-flex;
    bottom: 40rem;
    width: 100px;
    height: 100px;
    margin: -2rem auto;
    justify-content: center;
   
    h3 {
      position: relative;
      font-size: 1rem;
      top:1.7rem;
    }
    p {
      position: relative;
      top: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      margin: 0.4rem auto;
      padding: 0.2rem;
  
    }
  }
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
export default UserMealPlan
