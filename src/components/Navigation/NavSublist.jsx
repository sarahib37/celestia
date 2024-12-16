import React from "react";
import styled from "styled-components";

const SubContainer = styled.div`
    border: none;
    width: 90%;
    display: flex;
    gap: 1.5em;
    align-items: center;
    margin: 0 .5em;
    padding: .5em 0;   
    

    &:not(:last-child){
        border-bottom: .1px solid #d9d5df;
    }

    img{
        background: #000;
        padding: .1em;
        border-radius: 50%;
        width: 7%;
        height: 50%;
    }

    &:hover{
        img{
            background-color: #7b2bf9;
        }

        .subtitle{
            color: #7b2bf9;
        }
    }
`

const SubTitles = styled.div`
    p{
        margin: 0;
        padding: 0;
        padding-bottom: .2em;
    }

    display: flex;
    flex-direction: column;
`

const Title = styled.p`
    color: #777;
    font-size: .8em;

    @media (min-width: 992px){
        font-size: .6em;
    }
`

const SubTitle = styled.p`
    color: #000;
    font-size: .8em;
    font-weight: bold;
`

const Image = styled.img`
    width: 100%;
    max-width: 1em;
    height: auto;
`

    function NavSublist({index, sub}) {
      return (
        <SubContainer key={index}>
            <Image src={sub.icon} alt={sub.alt} />
            <SubTitles >
                <Title>{sub.title}</Title>
                <SubTitle className='subtitle'>{sub.subTitle}</SubTitle>
            </SubTitles>
        </SubContainer>
    )}
  
export default NavSublist 