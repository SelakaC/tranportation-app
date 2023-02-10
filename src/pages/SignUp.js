import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const SignUp = () => {

 
  const [details, setDetails] = useState({
    email:'',
    userName:'',
    password1:'',
    password2:''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({...details,[name]:value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(details.password1 !== details.password2){
      alert("Password doesn't match");
      return;
    }
    try {
      const newUser = {
        username:details.userName,
        email:details.email,
        password:details.password1
      }
      const res = await axios.post('http://localhost:8000/api/auth/register',newUser);
      if(res.data){
        navigate('/signin',{state:{loginName:newUser.username}});
      }
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>
    <Form className='mt-5 md' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" value={details.email} onChange={handleChange} autoComplete='off' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name='userName' value={details.userName} onChange={handleChange} placeholder="Enter User Name" autoComplete='off' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" name='password1' value={details.password1} onChange={handleChange} autoComplete='off' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re-Enter Password" name='password2' value={details.password2} onChange={handleChange} autoComplete='off' required/>
      </Form.Group>
      
      <Row className='mt-5'>
        <Col>
        <Button variant="primary" type="submit" size='lg'>
        Sign Up
      </Button>
        </Col>
        <Col>
        <Link to='/'>
        <Button variant="primary" size='lg'>
        Back
      </Button>
        </Link>
        </Col>
      </Row>
      
    </Form>
    </Container>
  )
}

export default SignUp