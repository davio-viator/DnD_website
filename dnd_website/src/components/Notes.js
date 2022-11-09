import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';

import Axios from 'axios';

var timer = null;

let name;

const Notes = (props) => {



  const [notes,setNotes] = useState('∅')

  function getNotes(){
    console.log(props);
    Axios.get(`http://localhost:3030/get-notes?id=${props.id}`)
      .then(res =>{
        name = res.data[0].name
        res.data[0]!=null?setNotes(res.data[0].notes):setNotes(notes)
      })
      .catch(err => {

      })
  }

  function updateNotes(){
    Axios.get(`http://localhost:3030/set-notes?id=${props.id}&notes=${notes}`)
      .then(res =>{
      })
      .catch(err => {
        alert(err)
      })
  }

  function handleChange(e){
    clearTimeout(timer)
    setNotes(e.target.value)
    timer = setTimeout(() => {
      updateNotes()
    }, 800);
  }

  useEffect(()=>{
    getNotes()
  },[])

  return(
    <div className='notes'>
      <h3 className='t-center mt-3 notes-header'>Notes: <span style={{color:'red'}}>{name}</span></h3>
      <Form.Control style={{resize:'none'}} className="notes-input" onChange={(e)=> handleChange(e)} value={notes} as="textarea" rows={28}/>
    </div>
  )

}

export default Notes;