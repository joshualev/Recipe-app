
import { React, useEffect, useState } from 'react'
import {motion} from 'framer-motion';

import styled from 'styled-components';
import {Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

  const UserMealPlan = ({handleDeleteMealPlan, handleShowMealPlan, authorised, mealPlan, handleCreateMealPlanSubmit, handleUpdateMealPlan}) => {
    const [generatedPlan, setGeneratedPlan] = useState(null);
    const [input, setInput] = useState(2000);
    
   
    
    const getMeals = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?targetCalories=2000&apiKey=${process.env.REACT_APP_API_KEY}`
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

console.log(mealPlan)
  const handleChange = (e) => {
    setInput([e.target.name] = e.target.value)
  }


  return (  
    <>

    {/* {authorised &&
    <> */}
    <Container2>
    <form onSubmit={handleSubmit}>
      <StyledInputText type='number' name='input' onChange={handleChange} placeholder='Target calories'></StyledInputText>
      <SubmitButton type="submit" value="Generate Meal Plan"/>
    </form>
  </Container2>

  <MealPlanContainer>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} gap={3}>
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
                        {/* <p>{Math.round(meal.week.monday.nutrients.calories)}</p> */}
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
//   }
//   {!authorised && 
// <Container3>
// <StyledDiv1>You need an account to save recipes</StyledDiv1>
//   <Link to='/login' style={{textDecoration:'none'}}>
//     <StyledDiv2>Log in</StyledDiv2>
//   </Link>
//   <Link to='/register' style={{textDecoration:'none'}}>
//     <StyledDiv2>Register</StyledDiv2>
//   </Link>
// </Container3> 
// }
    // </>


  )
}
const MealPlanContainer = styled.div`
margin: 3rem;

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

const Container3 = styled.div`
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
