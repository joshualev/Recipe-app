import React from 'react';
import styled from 'styled-components';

const AdvancedSearch = () => {
  return (
    <Container>
      <TextInput type='checkbox'/>
      <SubmitButton type='submit'/>
    </Container>
  )
}

export default AdvancedSearch


const TextInput = styled.input`
  width: 300px; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
`

const SubmitButton = styled.input`
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
}
`;

const Container = styled.div`
  margin: 1rem auto;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;