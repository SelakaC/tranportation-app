import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const VehicleNumberCheck = () => {

  const navigate = useNavigate();

  const [type, setType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  useEffect(() => {
    setType('1');
  },[]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let url = '';
      if(type === '1'){
        url = `http://localhost:8000/api/sgsoil?vehicle_No=${vehicleNumber}`;
      }else if(type === '2'){
        url = `http://localhost:8000/api/timwood?Vehicle_number=${vehicleNumber}`;
      }

      const res = await axios.get(url);
      if(res.data){
        if(res.data.length > 0){

          const {_id} = res.data[res.data.length - 1];
          navigate('/details',{state:{id:_id,type}})
        }else{
          alert('Not Found');
          return;
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Row className='mt-5'>
        <Col>
        <h2>Vehicle Number Checker</h2>
        </Col>
      </Row>

      <Form className='mt-5' onSubmit={handleSubmit}>

      <Form.Label>Select Type</Form.Label>
      <Form.Select onChange={(e) => setType(e.target.value)}>
      <option value="1">Soil and Sand</option>
      <option value="2">Timber and Wood</option>
      </Form.Select>
       
      <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
        <Form.Label>Vehicle Number</Form.Label>
        <Form.Control type="text" name='vnumber' placeholder="Enter Vehicle Number" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit" size='lg'>
        Check
      </Button>

      </Form>

      <Link to='/home'>
      <Button variant='secondary' size='lg' className='mt-5'>
        Back
      </Button>
      </Link>

    </Container>
  )
}

export default VehicleNumberCheck