import {NavLink} from 'react-router-dom';
import styled from "styled-components";


function Category() {
  
  return (
    <List>
      <NavLink to='/cuisine/italian'>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to='/cuisine/thai'>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to='/cuisine/mediterranean'>
        <h4>Mediterranean</h4>
      </NavLink>
      <NavLink to='/cuisine/vietnamese'> 
        <h4>Vietnamese</h4>
      </NavLink>
      <NavLink to='/cuisine/korean'> 
        <h4>American</h4>
      </NavLink>
      <NavLink to='/cuisine/asian'> 
        <h4>Asian</h4>
      </NavLink>
      <NavLink to='/cuisine/korean'> 
        <h4>Korean</h4>
      </NavLink>
      <NavLink to='/cuisine/korean'> 
        <h4>African</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;


export default Category