import { useState } from 'react'
import Header from './assets/components/Navbar/Header1'
import Navbar from './assets/components/Navbar/Navbar'
import Carousel from './assets/components/carousel/carousel'
import Card from './assets/components/Card/card'
import ShoppingCard from './assets/components/ShoppingCard/ShoppingCard'
import Design from './assets/components/Designer/Heroo'
import Carda from './assets/components/ShoppingCard/card2'
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Collection from './assets/components/Collection/Collection'
import Auth from './assets/components/Authorise/Auth'
import SlickSlider from './assets/components/Instagram/SlickSlider'
import Gallery from './assets/components/Gallery/Galllery'



function App() {     
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Card />
      <ShoppingCard />
      <Design />
      <Carda />
      <Collection />
      <Gallery/>
      <SlickSlider />
      <Auth />
      <Footer />
    </>

  )
}

export default App
