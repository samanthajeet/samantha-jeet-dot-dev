import React from "react";
import routes from './routes'
import SocialMediaNav from './components/SocialMediaNav'
import {AppContainer} from './reusableComponents/StyledComponents'
import "./App.css";

function App() {
  return (
    <AppContainer>
      {routes}
      <SocialMediaNav />
    </AppContainer>
  );
}

export default App;
