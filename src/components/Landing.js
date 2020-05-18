import React from "react";
import {
  AppContainer,
  ProfileImage,
  H1,
  Paragraph,
  TextArea,
  SubTitle,
  MainContent,
  LeftContainer
  
} from '../reusableComponents/StyledComponents';
import profilephoto from '../images/profilephoto.jpg'

function App() {
  return (
    <AppContainer>
      <MainContent>
        <LeftContainer>
          <ProfileImage>
            <img src={profilephoto} alt="samantha jeet" />
          </ProfileImage>
        </LeftContainer>
        <TextArea>
          <H1>samantha jeet</H1>
          <SubTitle>
            full-time stay at home daughter | internet maven | developer{" "}
          </SubTitle>
          <Paragraph>
            Aloha and welcome to this rad and informative website. Samantha has
            always dreamed of speaking about herself in the third person and is
            thankful for this opportunity.
          </Paragraph>
          <Paragraph>
            Sam was raised primarily on islands in The Pacific like Hawai'i, the
            Philippines, and Japan. Proof of this is seen in her wide feet,
            year-round sandal tan, and immense love for Spam and rice. Sam's
            friends have occasionally referred to her as "Miss Aloha" and to
            this day it's still one of the best compliments she could ever
            receive. Since moving to the mainland in the mid-2000s, Miss Jeet
            has been fortunate enough to call Oceanside, CA Home.
          </Paragraph>
          <Paragraph>
            Before becoming a developer, Samantha was a GIS Specialist working
            in the transit management and design industry. Though she loved
            geography and those she worked with, she knew it wouldn't fulfill
            her much longer. This realization brought her back to coding, which
            she first discovered in middle school when she would edit her
            MySpace page and make GeoCities fan pages for Charmed and Star Trek
            Voyager.
          </Paragraph>
          <Paragraph>
            Samantha officially moved to Salt Lake City in late 2019 when she
            accepted her first developer role. Since starting this role,
            Samantha has had the opportunity to learn from and work alongside
            some of the smartest and grooviest people in the business. She is
            thankful every day to be part of a company that truly cares for its
            employees and to be part of a team where teaching and learning are
            the norms.
          </Paragraph>
          <Paragraph>
            Outside of work, Miss Jeet enjoys working on personal app projects,
            analog photography, binge-watching Bob's Burgers and Farscape,
            calling her mom 3 times a day, going to piano/karaoke/arcade bars
            with friends, relistening to Tina Fey's Bossypants, getting boba
            with her younger brother, and listening to podcast on medical
            history.
          </Paragraph>
          <Paragraph>
            Miss Jeet holds a B.Sci in Health Care Administration and an M.Sci
            in Geographic Information Sciences. She promised her mom she would
            mention that.
          </Paragraph>
        </TextArea>
      </MainContent>
    </AppContainer>
  );
}

export default App;
