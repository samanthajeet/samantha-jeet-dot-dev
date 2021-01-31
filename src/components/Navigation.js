import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Nunito", sans-serif;
  width: 100%;
  padding: 1em;
  a {
    margin-left: 1em;
    font-size: 1.5em;
    color: black;
  }

  a:hover {
    color: orange;
  }

  h1 {
    font-size: 3em;
  }

`;

const Navigation = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <h1 className="text-shadow">sj</h1>
        </Link>
        <Link to="/">about</Link>
        <Link to="/reading">reading</Link>
      </Nav>
    </>
  );
};

export default Navigation;
