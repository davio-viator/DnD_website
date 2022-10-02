import React,{useState} from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import userIcon from '../assets/images/user-icon.png'

import FormHeader from '../components/FormHeader';

import Axios from 'axios'

const firstnames = [
  "Gilberto ",
  "Debra ",
  "Arlie  ",
  "Irwin  ",
  "Federico  ",
  "Lea  ",
  "Kathrine  ",
  "Dana   ",
  "Jeri  ",
  "Darius   ",
  "Tara  ",
  "Martha  ",
  "Therese  ",
  "Ym  ",
  "Joel  ",
  "Edward  ",
  "Scottie  ",
  "Hans  ",
]

const lastnames = [
  "Sanchez",
  "Donaldson",
  "Buchanan",
  "Huynh",
  "Dorsey",
  "Mercer",
  "Hull",
  "Marsh",
  "Brady",
  "Kaufman",
  "Taylor",
  "Williams",
  "Paul",
  "Atkins",
  "Griffin",
  "Hines",
  "Mosley",
  "Butler",
  "Duran",
  "Lopez",
  "Dunelle",
]

const usernames = [
  "🐉 Legna 🐲",
  "Hayaat",
  "ahmosys",
  "Starlight Hero Alice",
  "milkymomma",
  "TheBoy",
  "LGOtune",
  "guigui_hbo",
  "williwarrior",
  "saveroque",
  "Tiffou",
  "silphore",
  "Kalat",
]
const firstname = getRandom(firstnames)
const lastname = getRandom(lastnames)
const username = getRandom(usernames)

var timer = null

function getRandom(array){
  return array[Math.floor((Math.random()*array.length))]
}

var vpassword;
var email;

const Registration = (props) =>{

  const [iconSrc,setIconSrc] = useState(userIcon);
  const [info,setInfo] = useState({firstName:null,lastName:null,userName:null,password:null,status:'dm'});
  const NoThumbnail = '';

  const [saved,setSaved] = useState(false)
  const [error,setError] = useState(false)

  const [emailUsed,setEmailUsed] = useState(false)
  const [passwordVerified,setPasswordVerified] = useState(false)

  const serverUrl = 'http://localhost:3030/'

  

  /* Array.prototype.random() = function(){
    return this[Math.floor((Math.random()*this.length))]
  } */

/*   Object.defineProperty(Array.prototype,'random',{
    value:function(){return this[Math.floor((Math.random()*this.length))]}
  }) */

  
  function handleImagesChange (imgsrc,e) {   
    let reader = new FileReader();
    reader.addEventListener("load",function (value){
        if(this.result && localStorage && imgsrc.size < 1500000){
            localStorage.setItem("usrIcon",this.result);
            if(imgsrc.size<1500000){
              setIconSrc(localStorage.getItem("usrIcon"));
            }else{
              setIconSrc(iconSrc,NoThumbnail)
            }
        }else{
            alert('File was too big try using a link instead');
        }
        console.log(this.result.substring(0,30))
      });
      reader.readAsDataURL(e.target.files[0]);  
  }

  function handleFirstName(e){
    setInfo({...info,firstName:e.target.value})
  }
  
  function handleLastName(e){
    setInfo({...info,lastName:e.target.value})
  }
  
  function handleUserName(e){
    setInfo({...info,userName:e.target.value})
  }

  function handleEmail(e){
    email = e.target.value
    setInfo({...info,email:email})
    setEmailUsed(false)
    if(info.email && info.email.includes('@') && info.email.includes('.')){
      clearTimeout(timer)
      timer= setTimeout(() => {
          Axios.post(serverUrl+'check-email',{email:email})
          .then(res => {
              setEmailUsed(res.data.count > 0)
          })
          .catch(err => {
            console.error(err)
          })
      }, 1000);
    }
  }

  
  function handlePassword(e){
    setInfo({...info,password:e.target.value})
  }
  
  function handleVerifyPassword(e){
    vpassword = e.target.value;
    clearTimeout(timer)
    timer = setTimeout(() => {
      vpassword === info.password ? setPasswordVerified(false) : setPasswordVerified(true)
      // console.log(vpassword,info.password);
    }, 500);
    // setInfo({...info,firstName:e.target.value})
  }

  function handleVerifyPasswordSubmit(){
    console.log(vpassword,info.password);
    vpassword === info.password ? setPasswordVerified(false) : setPasswordVerified(true)
    return vpassword === info.password
  }
  
  function handleStatus(e){
    setInfo({...info,status:e.target.value})
  }

  function handleLink(e){
    setIconSrc(e.target.value)
  }

  function handleSubmit(value,e){
    let val = 0;
    e.preventDefault()
    handleVerifyPasswordSubmit()
    console.log(info);
    let values = {...info,iconSrc}
    // console.log(info,iconSrc.substring(0,30))
    // console.log(values)
    if(!emailUsed && info.email && email === info.email){
      Axios.post(serverUrl+'api/sign-up',values)
        .then(res=>{
          console.log(res,emailUsed);
          // props.setUserIcon(info.iconSrc)
          localStorage.removeItem('usrIcon')
          setSaved(true)
          setError(false)
        })
        .catch(err=>{
          console.error(err);
          setSaved(false)
          setError(true)
        })
    }

  }



  return(
    <Container className="t-cegnter mt-5">
      <Row >
        <FormHeader title="registration form"/>
        <Form className="buttongclr registration-form ps-5 ">
          {/* <Row className=" mt-3 mb-3"> */}
            <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Name</Form.Label>
              <Col sm="5"><Form.Control required onChange={(e) => handleFirstName(e)} type="text" placeholder={firstname} /></Col>
              <Col sm="5"><Form.Control required onChange={(e) => handleLastName(e)} type="text" placeholder={lastname} /></Col>
            </Form.Group>
          {/* </Row> */}
          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Username</Form.Label>
              <Col sm="10"><Form.Control required onChange={(e) => handleUserName(e)} type="text" placeholder={username} /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm="10"><Form.Control required /* onKeyDown={(e) => {handleKeyDown(e)}} */ onChange={(e) => handleEmail(e)} type="email" placeholder="name@email.com" /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Password</Form.Label>
              <Col sm="10"><Form.Control required onChange={(e) => handlePassword(e)} type="password" placeholder="*********" /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Verify password</Form.Label>
              <Col sm="10"><Form.Control required onChange={(e) => {handleVerifyPassword(e)}} type="password" placeholder="*********" /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label className="mt-4 position-relative" column sm="2">icon</Form.Label>
              <Col sm="1"><div className="box"><img className="user-icon" src={iconSrc}/></div></Col>
              <Form.Group sm="5" as={Col} controlId="formFile" className="mt-4">
                <Form.Control type="file" accept=".png,.jpeg,.jpg,.webp,.gif,.apng" onChange={(e) => handleImagesChange(e.target.files[0],e)} />
              </Form.Group>
              <Form.Group  as={Col}>
                <Col sm="12" className="mt-4"><Form.Control onChange={(e)=>handleLink(e)} type="text" placeholder="Vous pouvez aussi mettre un lien"></Form.Control></Col>
              </Form.Group>
          </Form.Group>

          <Form.Group as={Row} className="mt-3 mb-3">
              <Form.Label column sm="2">Status</Form.Label>
              <Col>
              <Form.Select required onChange={(e) => handleStatus(e)}>
                <option value="dm"> DM </option>
                <option value="player">Player </option>
              </Form.Select>
              </Col>
          </Form.Group>
          <Row className=" mt-4 mb-4 pe-3 d-flex justify-content-end">
            <Col sm="1" >
              <Button disabled={emailUsed || passwordVerified} value="Submit" type="submit" onClick={(e) => handleSubmit(e.target.value,e)}>Valider</Button>
            </Col>
          </Row>
        </Form>      
      </Row>
      {saved?<Alert className='mt-3 t-center success-alert-width' key='success' variant='success'>
          Save successful
        </Alert>:null}
        {error?<Alert className='mt-3 t-center error-alert-width' key='danger' variant='danger'>
          Something went wrong
        </Alert>:null}
        {emailUsed?<Alert className='mt-3 t-center error-alert-width' key='danger' variant='danger'>
          Cette email est déja utilisé
        </Alert>:null}
        {passwordVerified?<Alert className='mt-3 t-center error-alert-width' key='danger' variant='danger'>
          Les mots de passe ne sont pas les même
        </Alert>:null}
    </Container>
  )

}

export default Registration;