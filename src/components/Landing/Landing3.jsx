import React from 'react';
import styled from 'styled-components';
import Explore from '../../assets/explore.svg';
import Tia from '../../assets/tia.svg';
import Run from '../../assets/run.webp';
import ArrowImg from '../../assets/arrow.svg';

const Container = styled.div`
  padding: 1em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-family: Ruberoid;
  letter-spacing: 0.2px;
  line-height: 1.2em;
  margin: 1.5em 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    font-size: 4.4em;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3em;
  }

  @media (min-width: 1024px) {
    padding: 2em 5em;
  }
`;

const Box = styled.a`
  position: relative;
  background-color: #f8f9fa;
  padding: 2em;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;

  &:hover {
    .arrow {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
      transform: scale(1.1);
    }
  }

  h3 {
    font-family: Ruberoid;
    font-size: 1.5em;
    margin-top: 1em;

    @media (min-width: 768px) {
      font-size: 2em;
    }
  }

  p {
    font-weight: 300;
    font-size: 1em;
    margin-top: 0.3em;

    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }
`;

const Arrow = styled.img`
  position: absolute;
  font-size: 1.5em;
  color: #7b2bf9;
  padding: 1em;
  background-color: white;
  border-radius: 50%;
  left: 75%;
  top: 10%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    left: 85%;
  }

  &.arrow2 {
    left: 92%;
  }
`;

const BoxGrow = styled.a`
  position: relative;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2em;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3em;
  }

  @media (min-width: 1000px){
      margin: 5em;
      margin-top: 1em;
  }

  &:hover {
    .arrow2 {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  width: 70%;
  margin: 0;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

function Landing3({ id }) {
  return (
    <Container id={id}>
      <Title>Explore Celestia</Title>
      <SubContainer>
        <Box>
          <Arrow src={ArrowImg} alt="Arrow" className="arrow" />
          <img src={Explore} alt="Explore the ecosystem" />
          <h3>Explore the ecosystem</h3>
          <p>Explore Celestia’s ecosystem of rollups and modular infrastructure</p>
        </Box>
        <Box>
          <Arrow src={ArrowImg} alt="Arrow" className="arrow" />
          <img src={Tia} alt="Use Tia" />
          <h3>Use Tia</h3>
          <p>Pay for blobspace, secure the network, and participate in governance</p>
        </Box>
      </SubContainer>

      <BoxGrow>
        <Arrow src={ArrowImg} alt="Arrow" className="arrow2" />
        <Image src={Run} alt="Run a light node" />
        <div>
          <h3>Run a light node</h3>
          <p>Join the first modular data availability network in as little as 2 clicks</p>
        </div>
      </BoxGrow>
    </Container>
  );
}

export default Landing3;
