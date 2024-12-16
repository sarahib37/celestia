import React from "react";
import Build from "../../assets/build.webp";
import Abundance from "../../assets/abundance.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1em;

  @media (min-width: 768px) {
    gap: 5em;
    padding: 2em;
  }

  @media (min-width: 992px) {
    padding: 2em 4em;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 3em;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  font-family: "Ruberoid";
  letter-spacing: 0.2px;
  line-height: 1.2em;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3.5em;
  }

  @media (min-width: 992px) {
    font-size: 4.4em;
  }
`;

const Description = styled.p`
  margin: 0;
  color: #414141;
  font-size: 1em;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.1em;
  }

  @media (min-width: 992px) {
    font-size: 1.2em;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 0.8em 1.2em;
  font-size: 0.9em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;

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
    padding: 0.9em 1.5em;
    font-size: 1em;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5em;
  }
`;

const Sub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: 768px) {
    gap: 1.2em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

function Landing2({ handleDeploy }) {
  return (
    <Container>
      <SubContainer>
        <Sub>
          <Title>Build whatever</Title>
          <div>
            <Description>
              Deploy fast. Launch a blockchain with leading Ethereum rollup
              frameworks or transform nearly any VM into your own sovereign
              chain.
            </Description>
            <Description>
              With Celestia underneath, a customizable blockchain becomes as
              easy to deploy as a smart contract.
            </Description>
          </div>
          <Buttons>
            <Link to="/build">
              <Button className="black">Build Modular</Button>
            </Link>
            <Button onClick={handleDeploy}>Deploy</Button>
          </Buttons>
        </Sub>
        <Image src={Build} alt="Build" />
      </SubContainer>

      <SubContainer>
        <Image src={Abundance} alt="Abundance" />
        <Sub>
          <Title>Access abundance</Title>
          <div>
            <Description>
              Tap into the abundant throughput enabled by data availability
              sampling (DAS), the first architecture that scales while
              maintaining verifiability for any user.
            </Description>
            <Description>
              Anyone can directly verify and contribute to Celestia by running a
              light node.
            </Description>
          </div>
          <Buttons>
            <Button className="black">Learn Celestia</Button>
          </Buttons>
        </Sub>
      </SubContainer>
    </Container>
  );
}

export default Landing2;
