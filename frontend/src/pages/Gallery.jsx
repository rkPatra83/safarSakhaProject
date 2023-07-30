import React from 'react'
import { Container, Row, Form, FormGroup } from 'reactstrap'
import './../styles/gallery.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


const Gallery = () => {
    return (
        <div className="gallery">
            <Container>
                <Row>
                    <h2 className=' gallery__heading text-center p-4 mt-4'>Let's Create An Album Of The World</h2>
                </Row>

                <Row className='image__upload'>
                    <Form>
                        <h4 className='d-flex align-items-center my-4'>Share Memories Of Your Tour With Images</h4>
                        <FormGroup className='image d-flex align-items-center'>
                            <input type="file" name="image" id="image" multiple accept='image/*' required />
                        </FormGroup>

                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='btn primary__btn w-50 m-4'>Upload</button>
                        </div>
                    </Form>
                </Row>

                <Row className='gallery__content'>
                    <h4 className='d-flex align-items-center my-5 p-3'>See What Others Are Exploring</h4>
                    <div className="gallery__images">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                        <Masonry gutter='1rem'>
                            <img src="https://source.unsplash.com/1600x900/?adventure" alt=""/>
                            <img src="https://source.unsplash.com/1600x900/?tour,india" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?travel" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?kedarnath" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?nature" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?bali" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?nature, adventure" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?kerala" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?andaman" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?southafrica" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?bali, forest" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?hiils" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?forest" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?wildlife" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?religion" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?safari" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?ocean" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?temple" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?people" alt="" />
                            <img src="https://source.unsplash.com/1600x900/?travel" alt="" />
                        </Masonry>
                    </ResponsiveMasonry>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default Gallery