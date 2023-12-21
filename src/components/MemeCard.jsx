import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MemeCard(props) {
    const navigate = useNavigate()
  return (
    <div className=''>
          <Card style={{ width: '18rem' }}>
      <Card.Img className='' variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button onClick={(e)=>navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MemeCard