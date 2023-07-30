import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './../styles/login.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Register = () => {

  const usernameRegex = /^[a-zA-Z0-9]*$/
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Please enter an username')
      .matches(usernameRegex, 'Username should contain only letters & numbers')
      .min(5, 'Username should have min 5 characters')
      .max(10, 'Username should have max 10 characters'),

    email: Yup.string()
      .required('Please enter an email')
      .email('Invalid email'),

    contact: Yup.string()
      .required('Please enter your contact number'),

    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(10, 'Password can be maximum 10 characters'),

    rePassword: Yup.string()
      .required('Please enter your password again to confirm')
      .oneOf([Yup.ref('password'), null], 'Password does not match'),

    acceptTerms: Yup.bool().oneOf([true], 'Please check the box')

  });

  const formOptions = { resolver: yupResolver(validationSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formOptions);


  const navigate = useNavigate()


  const handleClick = (data) => {
    console.log(data)
    alert("Welcome To Safar Sakha - Your Very Own Travel Buddy")
    navigate('/home')
  }

  return (
    <section className='login'>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleSubmit(handleClick)}>
                  <div className="form-group mb-3">
                  <input type="text"
                      name="username"
                      id="username"
                      placeholder='Username'
                      {...register('username')}
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                  </div>

                  <div className="form-group mb-3">
                  <input type="email"
                      name="email"
                      id="email"
                      placeholder='Email'
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </div>

                  <div className="from-group mb-3">
                    <input
                      type="tel"
                      name="contact"
                      id="contact"
                      placeholder='Contact Number'
                      {...register('contact')}
                      className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.contact?.message}</div>
                    </div>

                  <div className="form-group mb-3">
                  <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder='Password'
                      {...register('password')}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                  </div>

                  <div className="form-group mb-3">
                  <input
                      type="password"
                      name="rePassword"
                      id="rePassword"
                      placeholder='Confirm Password'
                      {...register('rePassword')}
                      className={`form-control ${errors.rePassword ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.rePassword?.message}</div>
                  </div>

                  <div className="form-group form-check">
                    <input
                      name="acceptTerms"
                      type="checkbox"
                      {...register('acceptTerms')}
                      className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''
                        }`}
                    />
                    <label className="form-check-label" style={{'color' : 'black'}}>
                       &nbsp;&nbsp;I have read and agree to the Terms & Conditions
                    </label>
                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                  </div>

                  <Button type='submit' className='btn secondary__btn auth__btn'>Create Account</Button>
                </Form>

                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register