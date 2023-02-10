import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const Details = () => {
  const location = useLocation();
  const {id,type} = location.state
  const [detail, setDetail] = useState({});
  const [ownerName, setOwnerName] = useState('');
  
  
  const getTransportDetails = async(id) => {
    let url = '';
    if(type === '1'){
      url = `http://localhost:8000/api/sgsoil/find/${id}`;
    }else if(type === '2'){
      url = `http://localhost:8000/api/timwood/find/${id}`
    }
    
      const res = await axios.get(url);
      if(res.data){
        setDetail(res.data);
        const {vehicle_No} = res.data;
        
        const res2 = await axios.get(`http://localhost:8000/api/vehicle?Vehicle_No_Plate_Id=${vehicle_No}`);
        console.log(res2);
        if(res2.data){
          setOwnerName(res2.data.Vehicle_Owner_Name);
        }else{
          setOwnerName('Not Found')
        }

    
      }
    

  }

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  useEffect(() => {
    getTransportDetails(id);
  },[]);
  
  if(type === '1'){
    return (
      <Container>
      <div style={{textAlign:'start'}} className='mt-5'>
      <p>Type - <b>{detail.type_of_Mineral}</b></p>
      <p>Vehicle Owner Name - <b>{ownerName}</b></p>
      <p>Vehicle Number Plate ID - <b>{detail.vehicle_No}</b></p>
      <p>Qunatity - <b>{detail.quantity_cubes}</b></p>
      <p>Reason - <b>{detail.reason}</b></p>
      <p>Trasport Start Date - <b>{convert(detail.permitted_to_Transport_Start)}</b></p>
      <p>Trasport End Date - <b>{convert(detail.permitted_to_Transport_End)}</b></p>
      </div>
      <Link to='/home'>
      <Button variant='secondary' size='lg' className='mt-5'>
        Back
      </Button>
      </Link>
    </Container>
    )
  }else if(type === '2'){
    return (
      <Container>
      <div style={{textAlign:'start'}} className='mt-5'>
      <p>Type - <b>{detail.Land_type}</b></p>
      <p>Vehicle Owner Name - <b>{ownerName}</b></p>
      <p>Vehicle Number Plate ID - <b>{detail.Vehicle_number}</b></p>
      {/* <p>Qunatity - <b>{detail.quantity_cubes}</b></p> */}
      <p>Reason - <b>{detail.Reason}</b></p>
      <p>Trasport Start Date - <b>{
        convert(detail.Permitted_To_Transport_Start)
      }</b></p>
      <p>Trasport End Date - <b>{
      convert(detail.Permitted_To_Transport_End)}</b></p>
      </div>
      <Link to='/home'>
      <Button variant='secondary' size='lg' className='mt-5'>
        Back
      </Button>
      </Link>
    </Container>
      )
  }

  
}

export default Details