import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';



const Recipe = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchRecipe = async () => {
    const response = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json()
    setRecipeData(data);
    data.analyzedInstructions.map((equipment)=>{
      console.log(equipment)
    })
      console.log(data)
  

  }

  useEffect(() => {
    fetchRecipe()
  },[params.name]);
  
  return (
    
    <Wrapper
    // Fade in on page enter
    animate={{opacity:1}}
    initial={{opacity:0}}
    // Fade out on leaving page
    exit={{opacity:0}}
    // animation duration(s)
    transition={{duration: 0.5}}
  >
      <div>
        
        <h2>{recipeData.title}</h2>
        <h4>Ready in {recipeData.readyInMinutes} minutes</h4>
        <img src={recipeData.image} alt={recipeData.title} />
      </div>

      <Info>
        <Button className={activeTab === 'information' ? 'active' : ''}  onClick={() => setActiveTab('information')}>
          Information
        </Button>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
          Instructions
        </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''}  onClick={() => setActiveTab('ingredients')}>
          Ingredients
        </Button>



        {activeTab === 'information' &&
        <div>
          
          <h3>
            Each serving will cost on average 
            ${(recipeData.pricePerServing / 100).toFixed(2)} {/*convert price data to usable value*/}
          </h3>
        </div>
        }

{/* ----------------!!!!!!!!!!!!!----------!!!!!!!!!!!!------------!!!!!!!!!!!!! */}
                                      {/* TODO */}
  {/* INSTRUCTION FETCH DATA BREAKS EASILY, ISSUE WITH THE [0] WHILE MAPPING! */}
{/* ----------------!!!!!!!!!!!!!----------!!!!!!!!!!!!------------!!!!!!!!!!!!! */}
        {/* {activeTab === 'instructions' &&
        <div>
            {recipeData.analyzedInstructions[0].steps.map((step) => {
              return(
              <div>
                <h4>Step {step.number}:</h4>
                <li>{step.step}</li>
              </div>
              )
            })}
        </div>
        } */}

{/* ----------------!!!!!!!!!!!!!----------!!!!!!!!!!!!------------!!!!!!!!!!!!! */}
        {activeTab === 'ingredients' &&
        <div>
          <h3>{recipeData.servings} servings</h3>
          <ul>
            {recipeData.extendedIngredients.map((ingredient) => {
              return(
              <li key={ingredient.id}>{ingredient.original}</li>
              )
              })}
          </ul>
        </div>
        }


      </Info>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  };
  li {
    font-size: 1.2rem;
    line-height: 1rem;
  };
  ul {
    margin-top: 2rem;
  };
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe