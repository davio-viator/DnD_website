import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = (props) => {

  function handleSort(e){
    console.log(e.target.value);
    props.sort(e.target.value);
  }

  function handleSearch(e){
    console.log(e.target.value);
    props.search(e.target.value);
  }

  const placeHolder = props.placeholder?props.placeholder:'Enter the name of your character'

  return(
    <>
      <Row style={{margin:'auto'}}>
        <Form style={props.no_padding ? {padding:'0'}:{}}>
          <Form.Group as={Row}>
            {props.icon?(<Col sm='12'><div className='spell-search-icon'></div><Form.Control className='ps-4' onChange={handleSearch} type='text' placeholder={placeHolder}/></Col>):
            <Col sm='10'><Form.Control onChange={handleSearch} type='text' placeholder={placeHolder}/></Col>}
            
            {props.submenue==undefined?(<Col>
            <Form.Select defaultValue={'createdAt DESC'} onChange={handleSort}>
              <option value='createdAt ASC'>Created: Newest</option>
              <option value='createdAt DESC'>Created: Oldest</option>
              <option value='name ASC'>Name: A to Z</option>
              <option value='name DESC'>name: Z to A</option>
              <option value='level DESC'>Level: Low to High</option>
              <option value='level ASC'>Level: High to Low</option>
              <option value='updatedAt ASC'>Modified: Latest</option>
              <option value='updateddAt DESC'>Modified: Oldest</option>
            </Form.Select>
            </Col>):null}
            
          </Form.Group>

        </Form>

      </Row>
    </>
  )


}

export default SearchBar;