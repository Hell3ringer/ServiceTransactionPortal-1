import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import Sidebarprof from './Sidebarprof';
import NavigationBarprof from './NavigationBarprof';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 200px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const ProfHome = (props) => (
 
    <div>
      <NavigationBarprof />
      <Sidebarprof />
    <h2>CURRENT POSTS OF PROFESSIONAL</h2>

    </div>
  
)