import styled from "styled-components";

export const AppContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100vw;
  margin: 1rem 0;
`;

export const MainContent = styled.section`
  display: flex;
  width: 50%;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileImage = styled.div`
  height: 20rem;
  img {
    object-fit: contain;
    height: 100%;
  }
`;

export const H1 = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 3rem;
`;

export const SubTitle = styled.h4`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  margin: .75rem 0;
`;

export const TextArea = styled.section`
  width: 35rem;
  min-width: 40vw;
  margin-bottom: 2rem;
    @media (max-width: 768px) {
    width: 90vw;
  }

`;
export const SocialMediaNavContainer = styled.div`
  width: 30%;
  min-width: 20rem;
  display: flex;
  justify-content: space-evenly;
`;

export const SocialIcon = styled.div`
  height: 1.25rem;
  margin-right: 1rem;
  ion-icon {
  color: black;
}
`;

export const LeftContainer = styled.section`
    margin-bottom: .5rem;
`
