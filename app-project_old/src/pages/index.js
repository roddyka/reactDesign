import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from '../components/Section'
import Wave from "../components/Wave"
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>YOUR BATTLEGROUND <br/> IS HERE</h1>
        <p>Welcome to the largest tournament website in the world</p>
        
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-pubg.png')} width="50" />
          <img src={require('../images/logo-fortinite.jpeg')} width="50" />
          <img src={require('../images/logo-csgo.png')} width="50" />
          <img src={require('../images/logo-minecraft.png')} width="50" />
          <img src={require('../images/logo-heartstone.png')} width="50" />
          <img src={require('../images/logo-fifa.png')} width="50" />
        </div>
        <Wave /> 
      </div>
    </div>
    <div className="Cards">
      <h2>6 tournaments are comming</h2>
      <div className="CardGroup">
        <Card 
        title="PUBG" 
        text="55 subscriptions" 
        image={require('../images/wallpaper-pubg.png')}
        />
        <Card 
        title="Fortinite" 
        text="176 subscriptions" 
        image={require('../images/wallpaper-fortinite.jpg')}
        />
        <Card 
        title="CS:GO" 
        text="100 subscriptions" 
        image={require('../images/wallpaper-csgo.jpg')}
        />
        <Card 
        title="Heartstone" 
        text="56 subscriptions" 
        image={require('../images/wallpaper-heartstone.jpg')}
        />
        <Card 
        title="Minecraft" 
        text="11 subscriptions" 
        image={require('../images/wallpaper-minecraft.jpg')}
        />
         <Card 
        title="FIFA 2020" 
        text="17 subscriptions" 
        image={require('../images/wallpaper-fifa.jpg')}
        />
      </div>
    </div>
    <Section  
    image={require('../images/wallpaper-csgo-fog.png')}
    logo={require('../images/logo-react.png')}
    title="create your own tournament"
    text="Learn how to create amazing events with our workshops. We host big events and you still get paid for it. Create your tournament, participants pay monthly amounts to be able to compete and part of that amount becomes a prize for the first placed."  />
    <SectionCaption>6 Workshops - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
