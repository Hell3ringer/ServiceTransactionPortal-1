import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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




export const History = () => (

  <div>
    <NavigationBar />
      <Sidebar />
 
     <h2>USER HISTORY</h2>
    <p>TRFDHHJD</p>

    </div>

    
 
   

 
  
  
   
  
)