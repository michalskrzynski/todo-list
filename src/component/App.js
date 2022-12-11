import React from 'react';
import NavBar from './NavBar';
import MainContent from './MainContent';
import data from '../data';

export default function App() {
  return (
    <div>
      <NavBar />
      <MainContent data={data} />
    </div>
  );
}