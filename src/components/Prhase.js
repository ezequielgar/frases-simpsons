import React from 'react';
import jeff from '../img/jeff.png'
import '../App.css';
import { Col,Card,Row } from 'react-bootstrap';

const Phrase = () => {
    return (
        <>
   
    <Card className='my-5 '>
<Row className='p-5'>
    <Col  md={3}   >
    <Card.Img src={jeff} className=' w-100'/>
    </Col>
    <Col md={9} >
   <Card.Text className='text-center'>
       <h5 >Jeff</h5>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorum!</p>
      </Card.Text>
   
    </Col>
  </Row>
  </Card>


</>
    

    );
};

export default Phrase;