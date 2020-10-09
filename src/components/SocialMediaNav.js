import React from "react";
import {
  SocialIcon,
  SocialMediaNavContainer,
} from "../reusableComponents/StyledComponents";

const SocialMediaNav = () => {

    const igURL = 'https://www.instagram.com/samjeet/';
    const twitterURL = 'https://twitter.com/samanthajeet';
    const linkedInURL = 'https://www.linkedin.com/in/samanthajeet/';
    const githubURL = 'https://github.com/samanthajeet';

  return (
    <SocialMediaNavContainer>
      <SocialIcon>
          <a href={igURL} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </a>
      </SocialIcon>
      <SocialIcon>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-twitter" size="large"></ion-icon>
          </a>
      </SocialIcon>
      <SocialIcon>
          <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </a>
      </SocialIcon>
      <SocialIcon>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
      </SocialIcon>
    </SocialMediaNavContainer>
  );
};

export default SocialMediaNav;
