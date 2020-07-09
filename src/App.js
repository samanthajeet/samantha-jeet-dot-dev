import React from "react";
import routes from './routes'
import SocialMediaNav from './components/SocialMediaNav'
import {AppContainer} from './reusableComponents/StyledComponents'
import ReactGA from 'react-ga';
import "./App.css";


ReactGA.initialize('UA-44595509-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <AppContainer>
      {routes}
      <SocialMediaNav />
    </AppContainer>
  );
}

export default App;
