import React from "react";
import styled from "styled-components";
import loading from "../images/loading.png";

const LoadingContainer = styled.div`
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loading} alt="loading" />
    </LoadingContainer>
  );
};

export default Loading;
