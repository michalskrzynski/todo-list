import React from 'react';
import NavBar from './NavBar';
import Projects from './Projects';
import data from '../data';

export default function App() {
  return (
    <div>
      <NavBar />
      <Projects data={data} />
    </div>

    
  );
}