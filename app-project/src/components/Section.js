import React from 'react'
import styled from 'styled-components'
import Wave from '../components/Wave'
const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
 
    @media (max-width: 640px) {
        height: 820px;
    }


`

const SectionLogo = styled.img`
    align-self:end;
    width: 128px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 100%;
    

    @media (max-width: 720px) {
        max-width: 600px;
        grid-template-columns: 1fr;
    }

    @media (max-width: 1060px){
      
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
 
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color:white;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`


const Section = props => (
    <SectionGroup image={props.image}>

        <WaveBottom><Wave /></WaveBottom>
        <WaveTop><Wave /></WaveTop>

        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section