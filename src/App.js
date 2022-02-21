import React from 'react'
import "./App.css";
import { Switch, Route } from 'react-router-dom'
// import Home from './pages/Home'
import LandingPageLayout from './layouts/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
   <Switch>
    
     <Route path='/'>
       <LandingPageLayout>
          <HomePage />
       </LandingPageLayout>
     </Route>
   </Switch>
  );
}

export default App;
