import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: './history',
    icon: <FaIcons.FaHistory />,
    cName: 'nav-text'
  }
];

export default SidebarData;