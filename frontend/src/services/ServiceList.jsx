import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import tourIcon from '../assets/images/tour-icon.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
       imgUrl: tourIcon,
       title: `International Tours`,
       desc: `Book an international or regional tour with us today`,
    },
    {
       imgUrl: guideImg,
       title: `Best Tour Guide`,
       desc: `We provide the best guide who can give the most vivid experience`,
    },
    {
       imgUrl: customizationImg,
       title: 'Customization',
       desc: `Just tell us your plans and we will make customized tour for you`,
    },
 ]

const ServiceList = () => {
  return (
    <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>
  )
}

export default ServiceList