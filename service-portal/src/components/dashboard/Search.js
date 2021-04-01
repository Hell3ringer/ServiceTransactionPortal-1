import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const Hemlo =styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;

`;


 function Search (){
  const names=['Bruce','Diana','Clark']
  return(
    <Hemlo>
      <NavigationBar />
      <Sidebar />
      <h2>SEARCH PROFESSIONALS</h2>
      <div>
      {
      names.map(name=> <h2>{name}</h2> )
      }
    </div>
    </Hemlo>
    
  )



}
export default Search