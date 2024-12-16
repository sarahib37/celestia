import React from 'react'
import styled from 'styled-components'
import LazyBridging from '../../assets/Celestia_Lazybridging.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CelestiaBlogs from '../../celestiaBlogs.js'

const Container = styled.div`
    padding: 1em;
    padding-top: 43em;
    position: relative; 
    margin-top: 5em;
    z-index: 999;

    h2 {
        font-size: 2em;
        font-family: Ruberoid;
        letter-spacing: .2px;
        line-height: 1.2em;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    @media (min-width: 768px) {
        padding: 0 4em;
        margin-top: 0;

        h2 {
            font-size: 4.4em;
            text-align: left;
        }
    }
`

const ArrowSpan = styled(FontAwesomeIcon)`
    color: #7b2bf9;
    transform: rotate(-45deg);
    transition: transform 0.3s;
`

const MainBlog = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    &:hover .hoverIcon {
        transform: rotate(0deg);
    }

    &:hover .hover {
        color: #7b2bf9;
    }

    @media (min-width: 768px) {
        gap: 2em;
    }
`

const Read = styled.div`
    p {
        font-family: Ruberoid;
        font-weight: 600;
        font-size: 1em;
        padding: .5em 0;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-top: 2em;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 3em;
    }
`

const Blog = styled.p`
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 0.5em;
`

const MoreBlogs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`

const MoreBlog = styled.a`
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    text-decoration: none;
    color: inherit;

    border-bottom: 0.1px solid #d9d5df;
    padding-bottom: 1em;

    &:hover .hoverIcon {
        transform: rotate(0deg);
    }

    &:hover .hover {
        color: #7b2bf9;
    }

    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 5px;
    }

    h3 {
        font-size: 1em;
        margin: 0;
    }

    @media (min-width: 768px) {
        img {
            width: 80px;
            height: 80px;
        }
    }
`

const More = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 2em;

    a {
        font-family: Ruberoid;
        font-weight: 600;
        font-size: 1em;
        text-decoration: none;
        color: inherit;
        display: inline-flex;
        align-items: center;
        gap: 0.5em;

        &:hover {
            color: #7b2bf9;
        }
    }

    @media (min-width: 768px) {
        text-align: right;
    }
`

function Landing5() {
  return (
    <Container>
        <h2>Blog</h2>
        <FlexContainer>
            <MainBlog href='https://blog.celestia.org/lazybridging/' target='_blank'>
                <img src={LazyBridging} alt='Lazy Bridging Blog Heading'/>
                <div>
                    <Blog>BLOG</Blog>
                    <h3>Lazybridging: the Celestia endgame to solve fragmentation and stream assets from anywhere</h3>
                    <Read><p className='hover'>Read now <ArrowSpan icon={faArrowRight} className='hoverIcon'/></p></Read>
                </div>
            </MainBlog>
            <MoreBlogs>
                {CelestiaBlogs.map((blog, index) => (
                    <MoreBlog href={blog.link} target='_blank' key={index}>
                        <img src={blog.image} alt={blog.alt}/>
                        <div>
                            <Blog>BLOG</Blog>
                            <h3>{blog.title}</h3>
                            <Read><p className='hover'>Read now <ArrowSpan icon={faArrowRight} className='hoverIcon'/></p></Read>
                        </div>
                    </MoreBlog>
                ))}
            </MoreBlogs>
        </FlexContainer>
        <More>
            <a href='https://blog.celestia.org/' target='_blank' rel="noreferrer">
                View blog <ArrowSpan icon={faArrowRight} className='hoverIcon'/>
            </a>
        </More>
    </Container>
  )
}

export default Landing5
