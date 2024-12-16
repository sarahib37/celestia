import React from 'react'
import socials from '../../Socials'
import styled from 'styled-components'
import ModularSummit from '../../assets/modularSummit.webp'
import ModularMeetup from '../../assets/modularMeetup.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.section`
    padding: 0 4em;
    padding-bottom: 3em;
    z-index: -1;
    position: relative;

    h2{
        font-size: 2.8em;
        font-family: Ruberoid;
        letter-spacing: .2px;
        line-height: 1em;
        margin: 0;
        padding: 0;
    }

    p{
        font-weight: 200;
        letter-spacing: .2px;
        font-size: 1.02em;
    }

    @media (min-width: 670px){
        h2{font-size: 4.4em}
    }
`

const Slider = styled.div`
    width: 100%;
    display: block;
    padding-top: 4em;
    height: 30em;

    @media (min-width: 670px){
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        gap: 1em;
    }
`

const SocialsContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    min-width: 48%;   
    border: 1px solid #d9d5df;
    border-radius: 6px;
    padding: 3em;
    gap: 3em;
    align-items: center;
    justify-content: center;
`

const SocialContainer = styled.a`
    display: flex;
    gap: 1.5em;
    width: 40%;
    margin: 0;
    align-items : center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    h3{
        font-family: Ruberoid;
        font-size: 1em;
    }

    p{
        font-size: .8em;
    }

    p, h3{
        margin: 0;
        padding: 0;
    }
`

const Logo = styled.img`
    width: 30%;
    height: 100%;
`

const ArrowSpan = styled(FontAwesomeIcon)`
    color: #7b2bf9;
    transform: rotate(-45deg);
`

const More = styled.div`

    width: 80%;
    text-align: right;

    p{
        font-family: Ruberoid;
        font-weight: 600;
        font-size: 1em;
    }


    &:hover{
        p{
            color: #7b2bf9;
        }

        .hoverIcon{
            transform: rotate(0deg);
        }
    }
`

const ImageContainer = styled.div`
    display: flex;
    gap: 0.5em;
    margin-top: 1em;

    @media (max-width: 670px) {
        overflow-x: scroll; /* Scroll only on small screens */
        img {
            height: 80vh;
        }
    }

    @media (min-width: 670px) {
        margin: 0;

        img {
            height: 100%;
            overflow-y: hidden;
        }
    }
`


const ImageSubContainer = styled.div`
    position: relative; 

    p{
        font-family: Ruberoid;
        font-weight: 600;
        font-size: 1em;
    }
`

const ImageDesc = styled.p`
    position: absolute;
    top: 85%;
    left: 2%;
    color: white;
    padding: .5em 1em;
    background-color: #6c757d;
    border-radius: 5em;
`

function Landing4() {
  return (
    <Container>
        <h2>Join the community</h2>
        <p>Join the Celestia community online or hang out at one of the grassroots Modular Meetups</p>
        <Slider>
            <SocialsContainer>
                {
                    socials.map((social) => {
                        return(
                        <SocialContainer target='_blank' href={social.link}>
                            <Logo src={social.icon} alt={social.logo}/>
                            <div>
                                <h3>{social.social}</h3>
                                <p>{social.slogan}</p>
                            </div> 
                        </SocialContainer>
                        )
                    })
                }

                <More><p>Find more <ArrowSpan icon={faArrowRight} className='hoverIcon'/></p></More>
            </SocialsContainer>
            <ImageContainer>
                <ImageSubContainer>
                    <ImageDesc>Modular Summit 2023</ImageDesc>
                    <img src={ModularSummit} alt='Modular Summit'/>
                </ImageSubContainer>
                <ImageSubContainer>
                    <ImageDesc>Modular Meetup</ImageDesc>
                    <img src={ModularMeetup} alt='Modular Meetup'/>
                </ImageSubContainer>
            </ImageContainer>
        </Slider>
    </Container>
  )
}

export default Landing4