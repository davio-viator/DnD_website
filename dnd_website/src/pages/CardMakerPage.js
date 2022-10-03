import React,{  useEffect, useState } from "react";
import randomWord from 'random-words';

import Card from "../components/Card";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import EditorCard from '../components/EditorCard';
import Container from 'react-bootstrap/Container';

import NoThumbnail from '../assets/images/no-thumbnail-image.png'

const CardMakerPage = (props) =>{

  let initialValues = 
  {   
    id:0,
    name : "Demon Treant",
    rank : "A+",
    ecology:"Monster's hystory",
    strenght :"Monster's strength",
    weakness:"Monster's weakness",
    imgSrc:'https://i.pinimg.com/originals/ba/a2/7a/baa27a58a45aae675b89c5b8b59b056c.png',
    keyword: randomWord({min:2 , max:5, join: ','})
  }; 

  const [items, setItems] = useState(initialValues);  
  // const [initialized, setInitialized] = useState(true)
  const [file,setFile] = useState(null)

  const ranks = {
    '-1':'∅',
    '1':'F',
    '3':'E-',
    '4':'E',
    '5':'E+',
    '6':'D-',
    '7':'D',
    '8':'D+',
    '9':'C-',
    '10':'C',
    '11':'C+',
    '12':'B-',
    '13':'B',
    '14':'B+',
    '15':'A-',
    '16':'A',
    '17':'A+',
    '18':'A++',
    '19':'S',
    '20':'S+',
  }
  
  function uploadImage (e,size) {
    let reader = new FileReader();
    reader.addEventListener("load",function (value){
        if(this.result && localStorage && size < 1500000){
            localStorage.setItem("usrIcon",this.result);
        }else{
            alert('File was too big try using a link instead');
        }
        console.log(this.result.substring(0,30))
      });
    reader.readAsDataURL(e.target.files[0]);
    return true
  }

function handleImagesChange (imgsrc,e) {
  // let result = uploadImage(e,imgsrc.size);

  let reader = new FileReader();
  reader.addEventListener("load",function (value){
      if(this.result && localStorage && imgsrc.size < 1500000){
          localStorage.setItem("usrIcon",this.result);
          if(imgsrc.size<1500000){
            // localStorage.getItem("usrIcon")    // return new object jasper object
            setItems({...items,imgSrc: localStorage.getItem("usrIcon")});
            setFile(imgsrc)
          }else{
            setItems({...items,imgSrc:NoThumbnail})
          }
      }else{
          alert('File was too big try using a link instead');
      }
      // localStorage.removeItem("usrIcon",this.result);
      console.log(this.result.substring(0,30))
    });
    reader.readAsDataURL(e.target.files[0]);  
  }

  function getRank(value){
    return ranks[value];
  }

function handleNameChange (e) {
    // console.log(e.target.value)
    setItems({...items,name:e.target.value})
    return 1
  }

  function handleRankChange(e){
    // console.log(e.target.value)
    let rank = getRank(e.target.value);
    setItems({...items,rank:rank})
    return 1
  }

  function handleImageChange (e){
    // console.log(e.target.value)
    setItems({...items,imgSrc:e.target.value})
    return 1
  }

  function handleKeyWordChange (e){
    // console.log(e.target.value)
    setItems({...items,keyword:e.target.value})
    return 1
  }

  function handleEcologyChange (e){
    // console.log(e.target.value)
    setItems({...items,ecology:e.target.value})
    return 1
  }

  function handleStrenghtChange (e){
    // console.log(e.target.value)
    setItems({...items,strenght:e.target.value})
    return 1
  }

  function handleWeaknessChange (e){
    // console.log(e.target.value)
    setItems({...items,weakness:e.target.value})
    return 1
  }

  function initializePicture(){
    if(localStorage.getItem('usrIcon')){
      setItems({...items,imgSrc:localStorage.getItem('usrIcon')})
      // console.log(initialized);
    }else{
      setItems({...items,imgSrc:'https://i.pinimg.com/originals/ba/a2/7a/baa27a58a45aae675b89c5b8b59b056c.png'})
    }
    // setInitialized(false);
  }

  useEffect(() =>{
    initializePicture()
  },[])
  /* const addMoreItems = () =>{
    setItems(prevItems => [...prevItems, {
      id: prevItems.length,
      title: randomWord(),
      subtitle: randomWord(),
      selected: Math.random>0.5,
    }]);
  } */
  
    return (
      <Container className="mt-5">   
        <Row> 
          <Col>
            <EditorCard imgFile={file} item={items}/>         
          </Col>
          <Col>
              <Form>
                  <Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Name of the Monster</Form.Label>
                      <Form.Control onChange={handleNameChange} type="text" placeholder="Name" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Rank of the monster</Form.Label>
                      {/* <Form.Control className="secondarybg" onChange={handleRankChange} type="text" placeholder="Rank" /> */}
                      <Form.Select onChange={handleRankChange}>
                        <option value="-1">∅ </option>
                        <option value="1">F </option>
                        <option value="3">E- </option>
                        <option value="4">E </option>
                        <option value="5">E+ </option>
                        <option value="6">D- </option>
                        <option value="7">D </option>
                        <option value="8">D+ </option>
                        <option value="9">C- </option>
                        <option value="10">C </option>
                        <option value="11">C+ </option>
                        <option value="12">B- </option>
                        <option value="13">B </option>
                        <option value="14">B+ </option>
                        <option value="15">A- </option>
                        <option value="16">A </option>
                        <option value="17">A+ </option>
                        <option value="18">A++ </option>
                        <option value="19">S </option>
                        <option value="20">S+</option>
                      </Form.Select>
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Keywords</Form.Label>
                      <Form.Control onChange={handleKeyWordChange} type="text" placeholder="Undead" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Ecology</Form.Label>
                      <Form.Control onChange={handleEcologyChange} type="text" placeholder="Forest" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Strenght</Form.Label>
                      <Form.Control onChange={handleStrenghtChange} type="text" placeholder="Forest Teleportation" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Weakness</Form.Label>
                      <Form.Control onChange={handleWeaknessChange} type="text" placeholder="Fire" />
                      </Form.Group>
                  </Row>
                  <Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Image Link</Form.Label>
                      {<Form.Control onChange={handleImageChange} type="text" placeholder="image" />}
                      </Form.Group>
                  </Row>
              </Form>
                <Form>
                
                  <Form.Group controlId="formFile" className="mb-3 position-relative">
                    <Form.Label>You can also upload a picture</Form.Label>
                    <Form.Control type="file" accept=".png,.jpeg,.jpg,.webp,.gif" onChange={(e) => handleImagesChange(e.target.files[0],e)} />
                  </Form.Group>
                  {/* <ChartMaker/> */}
              </Form>
          </Col>
        </Row>
    </Container>

    )
}

export default CardMakerPage;

