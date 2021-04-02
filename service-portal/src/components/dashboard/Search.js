import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import OccupationSearch from './OccupationSearch';
import Sidebar from './Sidebar';

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
  // const names=['Bruce','Diana','Clark']
  return(
    <div>  
    <NavigationBar/>
    <OccupationSearch/>
    <Sidebar/>
      </div>
  
    
  )



}
export default Search