import React, { useState } from 'react';
import {SelectForm, Title, Label, CheckBoxWrapperWrapper, CheckBoxWrapper, NumberInput, Container} from './AdvancedSearchStyles'
import { Paper, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = ({searchFilter, setSearchFilter}) => {
  const navigate = useNavigate() 
  // Track state of advanced filter form inputs
  const [input, setInput] = useState([]);
  // Track state of form checkbox elements
  const [isChecked, setIsChecked] = useState(false);
  
  const onCheckBoxChange = (e) => {
      setIsChecked(!isChecked)
      setSearchFilter({
        ...searchFilter,
              [e.target.name]: e.target.checked && e.target.value           
      })
  }
  const onInputChange = (e) => {
    // setIsChecked(!isChecked)
    setInput({
      ...input,
            [e.target.name]: e.target.value          
    })
  }

  const submitHandler = (e) => {
    let searchQuery = ''
    e.preventDefault()
    console.log(input)
    const keys = Object.keys(input)
    const values = Object.values(input)
    console.log(keys, values)
    for (let i = 0; i < keys.length; i++){
       if( i === 0 ){
        searchQuery += values[i] + '&'
      }
      else if (i === keys.length - 1) {
        searchQuery += keys[i] + values[i]
      }
      else {
      searchQuery += keys[i] + values[i] + '&'
     }     
    }
    navigate('/searched/' + searchQuery)
  };

  return (
 
    <Container>
      <Title>Filter Search</Title>
      <br/>

      <form onSubmit={submitHandler}>
{/* SEARCH FIELD START*/}
        <Paper
 
          sx={{ 
            m:'5px auto', p: '4px 4px', display: 'flex', width: '100%', borderRadius:'30px', backgroundColor:'white'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            required
            placeholder="Find recipes"
            inputProps={{ 'aria-label': 'Search' }}
            name='search'
            input onChange={onInputChange}
          />
            <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
{/* SEARCH FIELD END*/}
        
{/* HEALTH RELATED DIETARY PARAMETERS START */}
        <CheckBoxWrapperWrapper>
          {/*  */}
          <CheckBoxWrapper>
              <label htmlFor='lowSugar'>⬇️ <br/>Sugar
                <input checked={isChecked} onChange={onCheckBoxChange} className='lowSugar' name='lowSugar' id='lowSugar' type='checkbox'/>
              </label>
          </CheckBoxWrapper>
          {/*  */}
          <CheckBoxWrapper>
            <label htmlFor='lowSodium'>⬇️ <br/>Sodium
              <input checked={isChecked} onChange={onCheckBoxChange} className='lowSodium' name='lowSodium' id='lowSodium' type='checkbox'/>
            </label>
          </CheckBoxWrapper>
          {/*  */}
          <CheckBoxWrapper>
              <label htmlFor='lowSatFat'>⬆️ <br/>Fiber
                <input checked={isChecked} onChange={onCheckBoxChange} className='lowSatFat' name='lowSatFat' id='lowSatFat' type='checkbox'/>
              </label>
          </CheckBoxWrapper>
          {/*  */}
        </CheckBoxWrapperWrapper>
{/* HEALTH RELATED DIETARY PARAMETERS END */}  

{/* VEGAN VEGETARIAN PESCETARIAN PALEO SECTION START */}
        <CheckBoxWrapperWrapper>
          {/* VEGAN START */}
          <CheckBoxWrapper>
              <label htmlFor='vegan'>🥗<br/>Vegan
                <input checked={isChecked} onChange={onCheckBoxChange} className='vegan' name='vegan' id='vegan' type='checkbox'/>
              </label>
          </CheckBoxWrapper>
          {/* VEGAN END */}
          {/* VEGETARIAN START */}
          <CheckBoxWrapper>
            <label htmlFor='vegetarian'>🌽<br/>Vegetarian
              <input checked={isChecked} onChange={onCheckBoxChange} className='vegetarian' name='vegetarian' id='vegetarian' type='checkbox'/>
            </label>
          </CheckBoxWrapper>
          {/* VEGETARIAN END */}
        </CheckBoxWrapperWrapper>
    {/*     SPLIT FOR STYLING     */}
        <CheckBoxWrapperWrapper>
          {/* PESCATARIAN START */}
            <CheckBoxWrapper>
              <label htmlFor='pescatarian'>🍤<br/>Pescatarian
                <input checked={isChecked} onChange={onCheckBoxChange} className='pescatarian' name='pescatarian' id='pescatarian' type='checkbox'/>
              </label>
            </CheckBoxWrapper>
          {/* PESCATARIAN END */}
          {/* PALEO START */}
            <CheckBoxWrapper>
                <label htmlFor='Paleo'>🥩<br/>Paleo
                  <input checked={isChecked} onChange={onCheckBoxChange} className='Paleo' name='Paleo' id='Paleo' type='checkbox'/>
                </label>
            </CheckBoxWrapper>
          {/* PALEO END */}
        </CheckBoxWrapperWrapper>
{/* VEGAN VEGETARIAN PESCETARIAN PALEO SECTION END */}

{/* CATEGORY OF CUISINE START */}
          <SelectForm size="10" placeholder='category' name="cars" id="cars">   
              <option selected value="all">All</option>
              <option value="african">African</option>
              <option value="american">American</option>
              <option value="cajun">Cajun</option>
              <option value="caribbean">Caribbean</option>
              <option value="chinese">Chinese</option>
              <option value="easternEuropean">Eastern European</option>
              <option value="european">European</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="greek">Greek</option>
              <option value="indian">Indian</option>
              <option value="irish">Irish</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="koren">Korean</option>
              <option value="latinAmerican">Latin American</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="mexican">Mexican</option>
              <option value="middleEastern">Middle Eastern</option>
              <option value="southern">Southern</option>
              <option value="spanish">Spanish</option>
              <option value="thai">Thai</option>
              <option value="vietnamese">Vietnamese</option>
          </SelectForm>
{/* CATEGORY OF CUISINE END */}
          <br/>
{/* CALORIES AND MACRONUTRIENTS START */}
          <Label htmlFor='calories'>Calories</Label>
          <NumberInput onChange={onInputChange} name='maxCalories=' id='calories' type='number' placeholder='Calories'/>
          
          <Label htmlFor='protein'>Protein</Label>
          <NumberInput onChange={onInputChange} name='minProtein=' id='protein' type='number' placeholder='Protein'/>

          <Label htmlFor='carbohydrate'>Carbohydrate</Label>
          <NumberInput onChange={onInputChange} name='maxCarbs=' id='carbohydrate' type='number' placeholder='Carbohydrate'/>

          <Label htmlFor='fat'>Fat</Label>
          <NumberInput onChange={onInputChange} name='maxFat=' id='fat' type='number' placeholder='Fat'/>
{/* CALORIES AND MACRONUTRIENTS END */}
      </form>
    </Container>
  )
}

export default AdvancedSearch

