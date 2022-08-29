import React, { useState } from 'react';
import { Title, Label, NumberInput, Container} from './AdvancedSearchStyles'
import { Box, Paper, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = ({searchFilter, setSearchFilter}) => {

  const navigate = useNavigate() 
  // Track state of form inputs
  const [input, setInput] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (e) => {
    setInput({
      ...input,
            [e.target.name]: e.target.value          
    })
  }

  // const onSearchChange = (e) => {
  //   setSearchTerm({
  //     ...searchTerm,
  //           [e.target.name]: e.target.value
  //   })
  // }

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
    <Box sx={{mb:'2rem'}}>
    <Container>
      <Title>Filter By Nutrients</Title>
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
        
{/* CATEGORY OF CUISINE END */}
          <br/>
{/* CALORIES AND MACRONUTRIENTS START */}
          <Label htmlFor='maxCalories'>Maximum Calories</Label>
          <NumberInput onChange={onInputChange} name='maxCalories=' id='calories' type='number' placeholder='Calories'/>
          
          <Label htmlFor='protein'>Protein</Label>
          <NumberInput onChange={onInputChange} name='minProtein=' id='protein' type='number' placeholder='Protein'/>

          <Label htmlFor='carbohydrate'>Carbohydrates</Label>
          <NumberInput onChange={onInputChange} name='maxCarbs=' id='carbohydrate' type='number' placeholder='Carbohydrate'/>

          <Label htmlFor='fat'>Fat</Label>
          <NumberInput onChange={onInputChange} name='maxFat=' id='fat' type='number' placeholder='Fat'/>
{/* CALORIES AND MACRONUTRIENTS END */}
      </form>
    </Container>
    </Box>
  )
}

export default AdvancedSearch

