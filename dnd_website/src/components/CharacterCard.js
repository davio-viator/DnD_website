import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const CharacterCard = (props) => {
  return(
    <Container className='mt-5'>
      <Card style={{width:'25rem'}}>
          <img className='characterIcon' src="https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=60&height=60&fit=bounds&quality=95&auto=webp"/>
          <Card.Img  style={{objectFit:'cover',height:'8rem'}} variant='top' src="https://www.dndbeyond.com/avatars/61/487/636453131400749482.jpeg"/>
        <Card.Body>
          <Card.Title>{props.values.name}</Card.Title>
          <Card.Subtitle> Level:{props.values.level} | {props.values.race} | {props.values.class}</Card.Subtitle>
          <Card.Link className='btn ms-4 ps-3' >View</Card.Link>
          <Card.Link className='btn' >Edit</Card.Link>
          <Card.Link className='btn' >Copy</Card.Link>
          <Card.Link className='btn danger' >Delete</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CharacterCard;