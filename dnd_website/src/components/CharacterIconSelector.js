import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/esm/Button';
import DropdownItem from './DropdownItem';

const CharacterIconSelector = (props) => {

  const imgSrcArray = [
    'https://www.dndbeyond.com/avatars/10/64/636339379309450725.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/65/636339379413013817.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/66/636339379511585674.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/67/636339379597405748.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/68/636339379719284096.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/70/636339380011151672.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/71/636339380148524382.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/69/636339379836386802.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/72/636339380273407155.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/73/636339380410900455.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/75/636339380609392876.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/76/636339380803463036.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/74/636339380514834583.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/77/636339380906111121.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/78/636339381000380903.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/79/636339381135015635.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/80/636339381240957080.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/82/636339381446749204.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/83/636339381554374819.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/81/636339381350287866.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/84/636339381635861851.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/85/636339381754406274.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/87/636339381984960966.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/86/636339381849352911.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/89/636339382189764523.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/90/636339382313449109.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/88/636339382078092479.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/91/636339382406329447.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/92/636339382508535391.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/93/636339382612972808.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/94/636339382701412358.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/615/636344362224477726.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/622/636344368141119831.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/625/636344369279195008.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/629/636344371217342714.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/630/636344371840983463.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/635/636344374342888622.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/636/636344374486383481.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/633/636344373213808272.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/640/636344375263661139.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/641/636344375495562561.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/154/636377825624852932.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/10/638/636344374784085840.png?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/155/636377825909803976.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/156/636377826331197781.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/157/636377826514551742.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/160/636377827176444845.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
    'https://www.dndbeyond.com/avatars/17/161/636377827302419864.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp',
  ]

  const [imgSrc,setImgSrc] = useState('')

  function handleImagesChange (imgsrc,e) {
    // let result = uploadImage(e,imgsrc.size);
  
    let reader = new FileReader();
    reader.addEventListener("load",function (value){
        if(this.result && localStorage && imgsrc.size < 1500000){
            localStorage.setItem("characterIcon",this.result);
            if(imgsrc.size<1500000){
              // localStorage.getItem("usrIcon")    // return new object jasper object
              // setItems({...items,imgSrc: localStorage.getItem("usrIcon")});
              // setFile(imgsrc)
              props.setSource(this.result)
            }else{
              // setItems({...items,imgSrc:NoThumbnail})
            }
        }else{
            alert('File was too big try using a link instead');
        }
        // localStorage.removeItem("usrIcon",this.result);
        console.log(this.result.substring(0,30))
      });
      reader.readAsDataURL(e.target.files[0]);  
    }

    function handleIconClick(src){
      props.setSource(src);
      // props.setDisplayed(false)
      // alert(src)
    }

    function handleExit(){
      props.setDisplayed(false)
    }

    function createDefaultPortraits(){
      let array = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
      console.log(array.length);
      return array.map((item,index) => {
        return(
          <div className="avatar-manager-list-item">
            <div className="avatar-manager-list-item-inner">
              <img onClick={(e) => handleIconClick(imgSrcArray[index])} className="avatar-manager-list-item-img" src={imgSrcArray[index]} loading="lazy" alt=""/>
            </div>
          </div>
        )
      })
    }

    console.log(props);

    function handleConfirm(){
      props.setDisplayed(false)
    }

    function handleExit(){
      props.setSource('');
      props.setDisplayed(false)
    }

    function displayRaceTraits(){
      console.log(Object.keys(props.values.traits));
      return Object.keys(props.values.traits).map((item,index)=> {
        return(
          <DropdownItem key={index} title={item.replaceAll('_',' ')} contenue={props.values.traits[item]} />
        )
      })
      
    }

    function displayClassTraits(){
      return Object.keys(props.values.traits).map((item,index)=>{
        console.log(props.values.traits[item]);
        return(
          <DropdownItem key={index} title={item.replaceAll('_',' ')} array contenue={props.values.traits[item]} />
        )
      })
      return <DropdownItem key={0} title="{props.values.traits[0]}" contenue="{props.values.traits[0]}" />
    }

  return(
    <div className='blackout-screen'>
      <div className="center-div">
        <div className="race-header">
          <span style={{fontWeight:'bold',fontSize:'22px'}}>
            {props.title}
          </span>
          <span onClick={handleExit} className='exit'></span>
        </div>

        <div className='race-content'>
          {props.icon?
          <>
            <span>
              <Form.Label>Upload Portrait</Form.Label>
              <span style={{color:'gray',fontSize:'12px'}}> Recommended size 150 x 150 px, Maximum File Size: 3MB</span>
              <Form.Control type="file" accept=".png,.jpeg,.jpg,.webp,.gif" onChange={(e) => handleImagesChange(e.target.files[0],e)} />
            </span>
            <Form.Label className='mt-3'>Portraits</Form.Label>
            <div className='teteestze'>
              {createDefaultPortraits()}
            </div>
          </>
          :null}

        {props.race?
          <>
            <div>
              <h5 style={{display:'inline-block'}}>{props.values.name}</h5>
              {props.values.legacy?<span className=" ms-3 mt-2 mb-2 ps-2 pe-2" style={{backgroundColor:'lightgray',borderRadius:'5px',maxWidth:'fit-content'}}>Legacy</span>:null}
            </div>
            <p style={{color:'gray',fontStyle:'italic'}}>{props.values.source}</p>
            <div>
              <span style={{display:'inline-block',width:'75%',fontSize:'15px'}}>
                {props.values.description}
              </span>
              <span>
                <img style={{width:'100px',position:'absolute',top:'30px'}} src={props.values.src}/>
              </span>
            </div>
            <div>
              <span style={{fontWeight:'bold'}}>Racial Traits: <span style={{fontWeight:'normal'}}>{props.values.racial_trait}</span></span>
            </div>
            <hr/>
            <h5>{props.values.name} Traits</h5>
            {/* <DropdownItem title="Ability Score Increase" contenue="Your Dexterity score increases by 2, and your Wisdom score increases by 1." /> */}
            {displayRaceTraits()}
          </>
        :null}

        {props.class?
        <>
          <div>
              <h5 style={{display:'inline-block'}}>{props.values.name}</h5>
              {props.values.legacy?<span className=" ms-3 mt-2 mb-2 ps-2 pe-2" style={{backgroundColor:'lightgray',borderRadius:'5px',maxWidth:'fit-content'}}>Legacy</span>:null}
            </div>
            <p style={{color:'gray',fontStyle:'italic'}}>{props.values.source}</p>
            <div>
              <span style={{display:'inline-block',width:'75%',fontSize:'15px'}}>
                {props.values.description}
              </span>
              <span>
                <img style={{width:'100px',position:'absolute',top:'30px'}} src={props.values.icon}/>
              </span>
            </div>
            <div>
              <div style={{fontWeight:'bold'}}>Hit Die: <span style={{fontWeight:'normal'}}>{props.values.hit_die}</span></div>
              <div style={{fontWeight:'bold'}}>Primary Ability: <span style={{fontWeight:'normal'}}>{props.values.Primary_ability}</span></div>
              <div style={{fontWeight:'bold'}}>Saves: <span style={{fontWeight:'normal'}}>{props.values.Saves}</span></div>
            </div>
            {displayClassTraits()}
        </>
      :null}

        </div>

        

        <div className='race-footer'>
          <div style={{width:'50%'}}>
            <Button onClick={()=>handleConfirm()} style={{width:'100%',height:'100%',borderRadius:'0px'}} variant="success">COMFIRM</Button>
          </div>
          <div style={{width:'50%'}}>
            <Button onClick={()=>handleExit()} style={{width:'100%',height:'100%',borderRadius:'0px'}} variant="light">CANCEL</Button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default CharacterIconSelector;