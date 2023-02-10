import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';

const SignIn = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  
  const {loginName} = location.state || '';
  
  const navigate = useNavigate();
  useEffect(() => {
    setUsername(loginName);
    setPassword('');
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const user = {username,password};
      const res = await axios.post('http://localhost:8000/api/auth/login',user);
      if(res.data){
        navigate('/home');
      }
      
      
    } catch (error) {
        console.log(error);
        alert(error.response.statusText);
        
    }
  }

  return (
    <Container>
    <Form className='mt-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' required/>
      </Form.Group>

      <Row className='mt-5'>
        <Col>
        <Button variant="primary" type="submit" size='lg'>
        Sign In
      </Button>
        </Col>
        <Col>
        <Link to='/'>
        <Button variant="secondary" size='lg'>
        Back
      </Button>
        </Link>
        </Col>
      </Row>
      
    </Form>
    </Container>
  )
}

export default SignIn