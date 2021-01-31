import React from "react";
import routes from "./routes";
import SocialMediaNav from "./components/SocialMediaNav";
import Navigation from "./components/Navigation";
import { AppContainer } from "./reusableComponents/StyledComponents";
import ReactGA from "react-ga";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

ReactGA.initialize("UA-44595509-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <AppContainer>
      <div>
        <Navigation />
        {routes}
      </div>
      <SocialMediaNav />
    </AppContainer>
  );
}

export default App;
