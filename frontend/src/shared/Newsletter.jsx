import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      alert("You will now receive regular updates in your mail id");
   }
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Subcribe now to get useful traveling information</h2>

                     <form onSubmit={handleSubmit}>
                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' required/>
                        <button className="btn newsletter__btn" type='submit'>Subcribe</button>
                     </div>
                     </form>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati adipisici sunt in, provident facere ipsam?
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter
