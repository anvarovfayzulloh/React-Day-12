import React from 'react'
import Nav from '../../components/nav/Nav'
import Hero from '../../components/hero/Hero'
import RecProducts from '../../components/recProducts/RecProducts'
import Featured from '../../components/featured/Featured'
import RecProductsv2 from '../../components/recProducts/RecProductsv2'
import Footerv1 from '../../components/footer/Footerv1'

const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <RecProducts/>
      <Featured/>
      <RecProductsv2/>
      <Footerv1/>
    </>
  )
}

export default Home