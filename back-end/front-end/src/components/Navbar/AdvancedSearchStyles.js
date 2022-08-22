import styled from 'styled-components';

export const SelectForm = styled.select`
  box-sizing: border-box; /* Make sure that padding and width stays in place */  
  margin: 0 auto;
  display: flex;
  width: 200px;
  padding: 10px;
  height: 150px; 
  border: 1px solid #ccc;
  border-radius: 4px; 
  background-color: rgba(95, 194, 95, 0.2);
  color: black;
  font-size: 0.8rem;
  text-align: center;
  transition 300ms;
  border: 1px solid rgba(95, 194, 95, 0.2);
  box-shadow: 0 0 0.1rem black;
  &:hover {
    background-color: rgba(95, 194, 95, 0.3);
  }
  
  option {
    width: 80%;
    font-size: 0.7rem;
    border-radius: 4px;
    margin: 0.2rem auto;
    padding: 0.2rem;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    transform: 1000ms ease-in-out;
    &:checked {
      background: rgba(179,215,255, 0.8);
      color: black;
      text-shadow: none;
    }
  }
`;


export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 0.2rem;
`;


export const Label = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 900;
`;

export const CheckBoxWrapperWrapper = styled.div`
  justify-content: center;
  display: flex;
  padding: 0.2rem 0.3rem;
  margin-bottom: 0.2rem;
  border-radius: 4px;
  width: 100%;
`;

export const CheckBoxWrapper = styled.div`
  margin: 0 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(95, 194, 95, 1);
  width: 100%;
  height: 40px;
  padding: 8px; 
  margin: 0.2rem;
  border: 1px solid rgba(95, 194, 95, 0.2);
  border-radius: 4px;
  text-align: center;
  transition: 300ms ease-in-out; 
  cursor: pointer;

  &:hover {
    background-color: rgba(95, 200, 95, 1);
    transform: scaleX(1.07) scaleY(1.07)
  }
  &:checked{ 
    background-color: blue;
  }
  input {
    display: none;
  }

  label {
    cursor: pointer;
    display: inline-flex;
    padding: 0.5rem;
    padding-bottom: 0.6rem;
    font-size: 0.8rem;
    color: white;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
`;


export const NumberInput = styled.input`
  box-sizing: border-box; /* Make sure that padding and width stays in place */ 
  display: flex;
  margin: 0 auto; 
  text-align: center;
  width: 150px;
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 4px;
  margin-top: 0.2rem;
  margin-bottom: 1rem; 
  font-size: 0.9rem;
  transition: 300ms ease-in-out;
  &:hover {
    transform: scaleX(1.07) scaleY(1.07);
  }
`;


export const Container = styled.div`
  margin: auto;
  width: 300px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 0.2rem #ccc;
  background-color: rgba(95, 194, 95, 0.5);
  padding: 20px;
`;


export const AdvancedFilter = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 2rem;
padding: 0.2rem; 
text-align: center;
transition: 300ms ease-in-out; 
cursor: pointer;

&:hover {
  transform: scaleX(1.07) scaleY(1.07)
}
input {
  display: none;
}

label {
  cursor: pointer;
  display: inline-flex;
  padding: 0.5rem;
  padding-bottom: 0.6rem;
  font-size: 0.8rem;
  color: black;
  font-weight: 700;
  margin-bottom: 0.2rem;
  &:hover {
    color: blue;
  }
}
`;