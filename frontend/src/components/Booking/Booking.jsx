import React, { useState } from 'react'
import './booking.css'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/thank-you');
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>per person</span></h3>
                <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-s-fill"></i>
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>

            {/* -------------------Booking Form -------------------------*/}
            <form className='booking__info-form' onSubmit={handleClick}>
                <div className="booking__form">
                    <h5>Journey Information</h5>
                    <div className="form-group mb-3">
                        <div className="form-label">Name</div>
                        <input type="text" name="fullName" id="fullName" placeholder='Your full name' required onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-label">Contact</div>
                        <input type="tel" name="phone" id="phone" placeholder='Your contact number' required onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-label">Travel Date</div>
                        <input type="date" name="bookAt" id="bookAt" required onChange={handleChange} className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-label">Persons Going</div>
                        <input type="number" name="guestSize" id="guestSize" placeholder='No. of persons' required onChange={handleChange} className='form-control' />
                    </div>

                </div>


                {/*---------------------- Booking Bottom ------------------*/}
                <div className="booking__bottom">
                    <ListGroup>
                        <ListGroupItem className='border-0 px-0'>
                            <h5 className='d-flex align-items-center gap-1'>{price} <i class='ri-close-line'></i> 1 person</h5>
                            <span>{price}</span>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 px-0'>
                            <h5>Service charge</h5>
                            <span>{serviceFee}</span>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 px-0 total'>
                            <h5>Total</h5>
                            <span>{totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>

                    <Button className='btn primary__btn w-100 mt-4'>Book Now</Button>
                </div>

            </form>
        </div >
    )
}

export default Booking