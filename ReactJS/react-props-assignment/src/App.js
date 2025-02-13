/*
  Objective:

  Create a React application that demonstrates styling components using various methods and passes props to child components.

  Requirements:
    Create a new React app using create-react-app .
    Create the following components:
      Header : displays a navigation bar with links to Home, About, and Contact pages.
      Home : displays a hero section with a background image, heading, and paragraph.
      About : displays a section with a heading, paragraph, and list of features.
      Contact : displays a form with input fields for name, email, and message.
    Style the components using the following methods:
      Inline styling
      CSS classes
      CSS modules
      Styled components
    Pass props from parent components to child components.
    Use React Fragment to wrap multiple elements.
*/

import React from 'react';

import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home heading='WELCOME'/>
      <About heading='ABOUT'/>
      <Contact heading='CONTACT'/>
    </React.Fragment>
  );
}

export default App;
