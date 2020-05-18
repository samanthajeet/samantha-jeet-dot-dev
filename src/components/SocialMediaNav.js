import React from "react";
import instagram_icon from "../images/icons/instagram_icon.png";
import linkedin_icon from "../images/icons/linkedin_icon.png";
import twitter_icon from "../images/icons/twitter_icon.png";
import github_icon from '../images/icons/github_icon.png'
import {
  SocialIcaon,
  SocialMediaNavContainer,
} from "../reusableComponents/StyledComponents";

const SocialMediaNav = () => {

    const igURL = 'https://www.instagram.com/samjeet/';
    const twitterURL = 'https://twitter.com/samanthajeet';
    const linkedInURL = 'https://www.linkedin.com/in/samanthajeet/';
    const githubURL = 'https://github.com/samanthajeet';

  return (
    <SocialMediaNavContainer>
      <SocialIcaon>
          <a href={igURL} target="_blank">
            <img src={instagram_icon} />
          </a>
      </SocialIcaon>
      <SocialIcaon>
          <a href={twitterURL} target="_blank">
            <img src={twitter_icon} />
          </a>
      </SocialIcaon>
      <SocialIcaon>
          <a href={linkedInURL} target="_blank">
            <img src={linkedin_icon} />
          </a>
      </SocialIcaon>
      <SocialIcaon>
          <a href={githubURL} target="_blank">
            <img src={github_icon} />
          </a>
      </SocialIcaon>
    </SocialMediaNavContainer>
  );
};

export default SocialMediaNav;
