import React from 'react'
import "./iphone.css" 
import Image2 from './Images/3.png'
export default function Apple4() {
  return (
    <div className='watch1'>
          <br/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0"}}>
        <img src="https://cdn-icons-png.flaticon.com/512/518/518714.png" alt="" style={{width:"88px"}}/>
        <h2 className='watch'>Watch</h2>    
        </div>
        <h4 style={{color:"red",
              fontSize:"21px",
            letterSpacing: "4px",margin:"0"}}>SERIES8</h4>
            <h2 style={{color:"blue"}}>Learn More & Buy </h2>
        <h3 class="subhead">A healthy leap ahead.</h3>
         <img src={Image2} alt="" />
    </div>
  )
}
