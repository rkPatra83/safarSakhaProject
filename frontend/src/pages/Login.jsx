import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './../styles/login.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter an email')
      .email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formOptions);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = (e) => {
    alert("Hello again")
    navigate('/home')
  }

  return (
    <section className='login'>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleSubmit(handleClick)}>
                  <FormGroup>
                    <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} {...register('email')} />
                    <div style={{'color' : 'red'}}>{errors.email?.message}</div>
                  </FormGroup>

                  <FormGroup>
                    <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} {...register('password')} />
                    <div style={{'color' : 'red'}}>{errors.password?.message}</div>
                  </FormGroup>

                  <Button type='submit' className='btn secondary__btn auth__btn'>Login</Button>
                </Form>

                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login