import React from 'react'
import Header from './../Header/Header'
import Routers from './../../router/Routers'
import Footer from './../Footer/Footer'

const layout = () => {
  return (
    <div>
        <Header />
        <Routers />
        <Footer />
    </div>
  )
}

export default layout