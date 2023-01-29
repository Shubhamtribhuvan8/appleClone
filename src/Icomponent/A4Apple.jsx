import React from 'react'
import "./iphone.css"
import Image3 from './Images/4.png'
import Image5 from './Images/5.png'
import Image6 from './Images/6.png'
import Image7 from './Images/7.png'
import Image8 from './Images/8.png'
import Image9 from './Images/9.png'
export default function A4Apple() {
  return (
    <div className='apple4'>
  {/* First two card */}
    <div class="card-container">
      <div class="card">
      <h2 className='watch' style={{margin:"0"}}>MacBook Pro</h2> 
      <h3 style={{margin:"0"}}>Supercharged by M2 Pro and M2 Max.</h3> 
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset"}}>Learn More & Buy </h2>
     <img src={Image3} alt="Card Image 1"/>
    </div>

    <div class="card">
    <h2 className='watch' style={{margin:"0"}}>HomePod</h2> 
    <h3 style={{margin:"0"}}>Profound Sound.</h3> 
    <h4 style={{color:"white",margin:"0"}}>Available starting 2.3</h4>
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset"}}>Learn More & Buy </h2>
    <img src={Image5} alt="Card Image 2"/>
  </div>
    </div>

 {/* SECOND two card */}
    <div class="card-container">
      <div class="card">
      <h4 class="headline2">Creativity and community. Woven together.</h4>
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset",margin:"0"}}>Learn More & Buy </h2>
     <br/> <br/>
     <img src={Image6} alt="Card Image 1"/>
    </div>

    <div class="card" style={{backgroundColor:"white",border:"none"}}>
    <h2 className='watch' style={{margin:"0",color:"black"}}>Valentine's Day</h2> 
    <h3 style={{margin:"0",color:"black"}}>Sealed with a gift!.</h3> 
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset"}}>Shop Now</h2>
    <br/> <br/>
    <img src={Image7} alt="Card Image 2"/>
  </div>
    </div>

 {/* Third two card */}
    <div class="card-container">
      <div class="card" style={{backgroundColor:"##fbfbfd",border:"none"}}>
      <h2 className='watch' style={{margin:"0",color:"white"}}>Fitness +</h2> 
      <h3 class="subhead11" style={{margin:"0",fontWeight: "unset",fontSize:"21px"}}>Welcome to the year of you.</h3> 
      <h3 style={{margin:"0",fontWeight: "unset",fontSize:"21px"}}>Now all you need is iPhone.</h3>
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset"}}>Learn More & Try free Now </h2>
    <br/> <br/>
     <img src={Image8} alt="Card Image 1"/>
    </div>

    <div class="card">
    <h2 className='watch' style={{margin:"0"}}>HomePod</h2> 
    <h3 style={{margin:"0"}}>Profound Sound.</h3> 
    <h4 style={{color:"white",margin:"0"}}>Available starting 2.3</h4>
    <h2 style={{color:"blue",fontSize:"21px",fontWeight:"unset"}}>Learn More & Buy </h2>
    <img src={Image9} alt="Card Image 2"/>
  </div>
    </div>

    </div>
  )
}
