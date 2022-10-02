import React, { Fragment, useState } from 'react'


import FrontCardEditor from './FrontCardEditor'
import RearCardEditor from './RearCardEditor'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

import Axios from 'axios'


const EditorCard = (props) =>{

    let code = 0;
    // let flip = false;

    const [value, setValue] = useState();
    const [flip, setFlip] = useState(false);
    const [saved,setSaved] = useState(false)
    const [error,setError] = useState(false)

    const refresh = () =>{
        setValue({});
    }

    function handleCard(){
        if(!flip)return <FrontCardEditor  value={props}/>
        else return <RearCardEditor value={props}/>
        
        // if (code=== 82) return <RearCard value={props} />
        // else return <FrontCard value={props}/>
    }

    function handleFlip(){
                setFlip(!flip);
    }

    function saveInfo(){
      // console.log(props.item);
      Axios.post('http://localhost:3030/save_card',props.item)
      .then(res=>{
        console.log(res)
        console.log(props.item);
        localStorage.removeItem('usrIcon')
        setSaved(true)
        setError(false)

      })
      .catch(err=>{
        console.error(err)
        setSaved(false)
        setError(true)
      })
    }

    return(
        <div>
            {/* <div id="front" className="visible"> 
            <FrontCardEditor value={props}/>
            </div>
            <div id="rear" className="cacher">
            <RearCardEditor value={props}/>
            </div> */}
            {handleCard()}
            <div className='button-div'>
            <Button className='buttons' onClick={handleFlip}>Flip</Button>
            <Button className='buttons' onClick={saveInfo}>Save</Button>
            </div>
            {saved?<Alert className='mt-3 t-center success-alert-width' key='success' variant='success'>
          Save successful
        </Alert>:null}
        {error?<Alert className='mt-3 t-center error-alert-width' key='danger' variant='danger'>
          Something went wrong
        </Alert>:null}
        </div>    
    )
}

export default EditorCard;