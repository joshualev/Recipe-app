import React, { useState } from 'react'
import styled from '@emotion/styled';

import image1 from './assets/wok.png'
import image2 from './assets/salad-pic.png'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
const Login = ({handleAuthorise}) => {
  const [fields, setFields] = useState({username:'', password:''})

  const handleChange= async(event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(fields)
    })
    const data = await res.json()
    console.log('DATA FROM HANDLE SUBMIT POST FETCH', data)
    console.log(data.authorised)
    handleAuthorise(data.authorised)
  }

  // TODO
  // const flashMessage={

  // }

  return (
    <div>
    <motion.div
    initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
  >
          <Container>
            <BlurrDiv/>
            <FormContainer onSubmit={handleSubmit}>   
            <Div1>
              <h2>Let's get cooking!</h2>
            </Div1>
      
              <label> Username </label>

              <StyledInputText 
              type='text'
              name='username'
              value={fields.username} 
              onChange={handleChange} 
            />
              <label> Password </label>

              <StyledInputText 
                type='password'
                name='password'
                value={fields.password} 
                onChange={handleChange} 
            />
               <StyledSubmit type="submit" value="Log in"/>
               <Link style={{textDecoration: 'none'}} to='/register'>
                <h5>
                  Don't have an account? Sign up!
                </h5>
              </Link>
              <Div2></Div2>
              <Div3></Div3>
              <ImageContainer1>
              <img src={image1}/>
              </ImageContainer1>

              <ImageContainer2>
                <img src={image2}/>
              </ImageContainer2>
            </FormContainer>     
          </Container>
          </motion.div>
    </div>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: -5rem auto;
  
  img{
    bottom: 50rem;
    position: relative;
    z-index:-2;
    width: 50%;
  }
`;

const ImageContainer1 = styled.div`
  position: relative;
  left: 20rem;
  top: 17rem;
  opacity: 0.9;
  transition: 300ms;
  @media (max-width: 768px) {
    top: 31rem;
    opacity: 0.7;
    left: 11rem;
  }
`;

const ImageContainer2 = styled.div`
  position: relative;
  bottom: 12.45rem;
  left: -9rem;
  transition: 300ms;
  @media (max-width: 768px) {
    left: -3rem;
  }
`;

const FormContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;


  label {
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: -0.8rem;
  }

  h5 {
    cursor: pointer;
    margin-top: -0.1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #6D94A6;
    transition: 300ms;
    &:hover {
      transform: scaleX(1.2) scaleY(1.2);
      color: #6D94A6;
    }
  }
`;

const StyledInputText = styled.input`
  position: relative;
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

const StyledSubmit = styled.input`
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

const Div1 = styled.div`

  position: relative;
  z-index: -2;
  top: 8rem;
  right: 5rem;
  background-color: rgba(95, 194, 95, 0.3);
  padding: 5rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

h2{
  margin-bottom:2rem;
  font-size: 2rem;
}

`;

const Div2 = styled.div`
  position: relative;
  z-index: -5;
  bottom: 14rem;
  left: 12rem;
  background-color: rgba(95, 194, 95, 0.5);
  padding: 5rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;


`;

const Div3 = styled.div`  
  position: relative; 
  z-index: -6;
  bottom: 36rem;
  left: 12rem;
  background-color: rgba(95, 194, 95, 0.2);
  padding: 2rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 300ms;
`;

const BlurrDiv = styled.div`
  position: relative;
  top: -2.2em;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 500px;
  height: 120px;
`