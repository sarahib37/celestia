import React, { useState } from 'react'
import FooterImg from '../assets/footer.webp'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Container = styled.footer`
    margin-top: -25em;
    padding: 0 1em;
    padding-bottom: 3em;
    padding-top: 5em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1000px){
        margin-top: -25em;
        padding-bottom: 3em;
        padding-top: 25em;
        position: relative;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
      
    
    &:before{
        background: url(${FooterImg}) no-repeat scroll bottom transparent;
        background-size: 100% 3500px;
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: -2;    
    }

    @media (min-width: 380px){
        &:before{
            background-size: 100% 1800px;
        }        
    }

    @media (min-width: 670px){
        &:before{
            background-size: cover 900px;
        }        
    }

    @media (min-width: 1100px){
        &:before{
            background-size: 100% 1200px;
        }        
    }
`

const Title = styled.h2`
    color: #fff;
    width: 90%;
    font-family: Ruberoid;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 20px;
    font-size: 1.3em;
    line-height: 48px;
    padding: 0;
    text-align: center;
    padding-top: 20em;
    max-width: 100vw;

    @media (min-width: 670px){
        margin-top: 10em;  
        padding-top: 3em;   
    }


    @media {min-width: 768px}{
        padding-top: 8em;    
        font-size: 3em;  
    }
`

const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: wrap;
    max-width: 100vw;

    @media (min-width: 768px) {
        max-width: 45%;
      }

    input{
        padding: 1em; 
        border-radius: 5px;
        width: 60%;
        border: none;
        font-family: inherit;
        font-size: 1em;
    }

    button{
        background: #000;
        border: none;
        border-radius: 6px;
        color: #fff;
        font-family: Ruberoid;
        font-size: 1em;
        font-weight: 700;
        letter-spacing: .2px;
        line-height: 1.25em;
        padding: 1em 2em;
        text-align: center;
        text-decoration: none;
        width: max-content;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

        &:hover{
            background: #333;
        }
    }
`

const LowerTitle = styled.h3`
    color: #fff;
    font-family: Ruberoid;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 20px;
    font-size: 1.5em;
    line-height: 2;
`

const SubContainer = styled.p`
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: #fff;
    font-size: 1em;
    line-height: 12px;
    flex-wrap: no-wrap;
    white-space: no-wrap;
    text-decoration: none;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;

    @media (min-width: 580px){
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: .9em 1.5em;
  font-size: 1em;
  font-family: 'Ruberoid';
  font-weight: 500;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  font-weight: bold;     
        
  &:hover{
    background-color: #ebebeb;
  }
`

const FlexContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
      }
`

const Acknowledgement = styled.p`
  text-align: center;
  color: #fff;
  padding: 0;
  font-size: .8em;  

  &.first{
    margin-top: 2em;
  }
`

function Footer() {
    const [capVal, setCapVal] = useState(null)
  return (
    <Container>
        <FlexContainer1>
            <Newsletter>
                <Title>Subscribe to our Newsletter</Title>
                <input type='email' placeholder='mail@celestia.com'/>
                <ReCAPTCHA sitekey='6LeB8ZYqAAAAANAEy8OS9EjED1H--PSxkoKAddPk' onChange={val => setCapVal(val)}/>
                <button disabled={!capVal}>Subscribe</button>
            </Newsletter>
            <FlexContainer>
                <div>
                    <LowerTitle>Developers</LowerTitle>
                    {['Build', 'Docs', 'Github', 'FAQ'].map((list) => {
                        return(<SubContainer>{list}</SubContainer>)
                    })}
                </div>
                <div>
                    <LowerTitle>Resources</LowerTitle>
                    {['Press', 'Glossary', 'Blog', 'Podcast', 'Resources'].map((list) => {
                        return(<SubContainer>{list}</SubContainer>)
                    })}
                </div>
                <div>
                    <LowerTitle>Misc</LowerTitle>
                    <SubContainer>Brand</SubContainer>
                    <Link to='/technology'><SubContainer>Technology</SubContainer></Link>
                    <Link to='/careers'><SubContainer>Careers</SubContainer></Link>
                    <Link to='/tos'><SubContainer>Terms of Service</SubContainer></Link>
                    <Link to='/privacy'><SubContainer>Privacy Policy</SubContainer></Link>
                </div>
                <div>
                    <LowerTitle>Follow us</LowerTitle>
                    <Button>View socials</Button>
                </div>
            </FlexContainer>
        </FlexContainer1>
        
        <Acknowledgement className='first'>This website is not maintained by Celestia Labs.</Acknowledgement>
        <Acknowledgement>Website designed with <FontAwesomeIcon icon={faHeart}/> by SI</Acknowledgement>
        
    </Container>
  );
}

export default Footer;