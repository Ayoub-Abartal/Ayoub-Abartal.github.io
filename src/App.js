
import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import {lightTheme, darkTheme} from './theme'
import {Route, Switch} from 'react-router-dom'

import AboutPage from './components/AboutPage';
import MyEducationPage from './components/MyEducationPage';
import MyProjectsPage from './components/MyProjectsPage'
import MainPage from './components/MainPage';
import MySkillsPage from './components/MySkillsPage'
import MyExperiencePage from './components/MyExperiencePage';

function App() {

  return (
   <>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/skills" component={MySkillsPage} />
          <Route exact path="/education" component={MyEducationPage}/>
          <Route exact path="/project" component={MyProjectsPage}/>
          <Route exact path="/experiences" component={MyExperiencePage}/>
      </Switch>
    </ThemeProvider>
   </>
  );
}

export default App;
