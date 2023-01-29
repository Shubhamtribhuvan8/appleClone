import React from 'react'
import "./iphone.css"
import Img from "./Images/1.png"
export default function Apple() {
  return (
    <div className='back'>
        <div className='name1'>
        <h2 class="headline">iPhone 14 Pro</h2>
      <h3>Pro.Beyond</h3>
      <h3 style={{color:"blue"}}>Learn More & Buy  </h3>
        </div>
      <img src={Img} alt="" />
    </div>
  )
}
