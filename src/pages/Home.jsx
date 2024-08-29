import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import CardSection from '../components/CardSection'
import CateGroup from '../components/CateGroup'

const Home = () => {
  return (
    <Container>
        <CateGroup/>
        <CardSection/>
    </Container>
  )
}

export default Home