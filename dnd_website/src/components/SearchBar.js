import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = (props) => {

  function handleSort(e){
    console.log(e.target.value);
    props.setTest(e.target.value);
  }

  function handleSearch(e){
    console.log(e.target.value);
  }

  return(
    <>
      SearchBar works !!!
      <Row>
        <Form>
          <Form.Group as={Row}>
            <Col sm='10'><Form.Control onChange={handleSearch} type='text' placeholder='Enter the name of your character'/></Col>
            <Col>
            <Form.Select defaultValue={'createdAt ASC'} onChange={handleSort}>
              <option value='createdAt DESC'>Created: Newest</option>
              <option value='createdAt ASC'>Created: Oldest</option>
              <option value='name ASC'>Name: A to Z</option>
              <option value='name DESC'>name: Z to A</option>
              <option value='level DESC'>Level: Low to High</option>
              <option value='level ASC'>Level: High to Low</option>
              <option value='updatedAt ASC'>Modified: Latest</option>
              <option value='updateddAt DESC'>Modified: Oldest</option>
            </Form.Select>
            </Col>
          </Form.Group>

        </Form>

      </Row>
    </>
  )


}

export default SearchBar;