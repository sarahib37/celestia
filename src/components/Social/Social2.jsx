import React from 'react'
import styled from 'styled-components'
import SocialList from '../../SocialList'

const Ctn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1000px){
        flex-direction: row;
    }
`

const SubCtn = styled.div`
    min-width: 46%;

    h2{
        font-size: 2.5em;
        font-family: "Ruberoid";
        line-height: 1;
        margin: 0;
        width: 30%;
        padding: 0;

        @media (min-width: 768px){
            font-size: 4.5em
        }
    }

    p{
        width: 70%;
        font-weight: 300;
        font-size: 1em;
    }
`

const SocialCtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
`

const SocialContainer = styled.div`
    width: 50%;
    display: flex;
    padding-top: 2em;
    gap: 1.5em;

    @media (min-width: 1000px){
        padding-top: 0;
        width: 45%;
        gap: .8em;
    }

    img{
        width: 100%;
        height: 70%;

        @media (min-width: 768px){
            width: 20%;
        }
    }

    p, h3{
        margin: 0;
        padding: 0;
        width: 100%;
    }

    h3{
        font-size: 1.8em;
        font-family: "Ruberoid";
    }

    p{
        font-weight: 300;
        font-size: .9em;
        line-height: 1.5;
    }
`

function Social2() {
  return (
    <Ctn>
        <SubCtn>
            <h2>Social channels</h2>
            <p>Communication channels for the community, discussions, updates, and news.</p>
        </SubCtn>

        <SocialCtn>
            {SocialList.map((social) => {
                return(
                    <SocialContainer key={social.social}>
                        <img src={social.icon} alt={social.social}/>
                        <div>
                            <h3>{social.social}</h3>
                            <p>{social.sub}</p>
                        </div>
                    </SocialContainer>
                )
            })}
        </SocialCtn>
    </Ctn>  
  )
}

export default Social2