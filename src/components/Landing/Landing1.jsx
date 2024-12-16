import React from "react";
import styled from "styled-components";
import HomepageBG from "../../assets/HomepageBG.webp";
import { Link } from "react-router-dom";

const Container = styled.div`
  
  position: relative;
  padding: 2em;  

  @media (min-width: 992px){
    padding: 2em 8em;
  }

  &:before {
    background-image: url(${HomepageBG});
    background-size: cover;
    background-position: center;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    @media (min-width: 992px){
      background-size: 195%;
      min-height: 100vh;
    }
  }
`;

const Title = styled.h1`
  font-family: "Ruberoid";
  font-weight: bold;
  font-size: 2.5em;
  padding: 0 1em;
  text-align: center;
  justify-content: center;
  line-height: 1.1;
  margin: 0;
  margin-top: 7em;
  letter-spacing: -0.02em;
  max-width: 350px;

  @media (min-width: 375px) {
    font-size: 1.8em;
    margin-top: 8em;
  }

  @media (min-width: 425px) {
    font-size: 2em;
  }

  @media (min-width: 768px) {
    font-size: 4em;
    line-height: 1.1;
    margin-top: 6em;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    font-size: 5.15em;
    margin-top: 4em;
    max-width: 100%;
  }

  @media (min-width: 1400px) {
    font-size: 5.5em;
  }
`;

const SubTitle = styled.p`
  font-family: "Ruberoid";
  font-size: 1em;
  text-align: center;
  padding: 1.3em;
  font-weight: 500;
  margin: 0;
  max-width: 100%;

  @media (min-width: 768px) {
    font-size: 1.1em;
    padding: 2em;
    max-width: 80%;
  }

  @media (min-width: 992px) {
    font-size: 1.2em;
    padding: 2em 3em;
  }

  @media (min-width: 1400px) {
    font-size: 1.6em;
    padding: 2em 6em;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  margin-bottom: 6em;
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 0.8em 1.2em;
  font-size: 1em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }

  &.black {
    background-color: #000;
    color: #ffffff;
    font-weight: bold;

    &:hover {
      background-color: #333;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 0.9em 1.5em;
  }
`;

function Landing1({ handleButton }) {
  return (
    <Container>
      <Title>The first modular blockchain network</Title>
      <SubTitle>
        Celestia is a modular data availability network that makes it easy for
        anyone to securely launch their own blockchain.
      </SubTitle>
      <Buttons>
        <Link to="/build">
          <Button className="black">Build modular</Button>
        </Link>
        <Button onClick={handleButton}>Explore</Button>
      </Buttons>
    </Container>
  );
}

export default Landing1;
