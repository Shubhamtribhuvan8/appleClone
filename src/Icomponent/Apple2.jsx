import React from 'react'
import "./iphone.css"
import Img1 from "./Images/2.png"
export default function Apple2() {
  return (
    <div>
        <h2 class="headline1">iPhone 14</h2>
        <h3 class="subhead1" >Big and bigger.</h3>
        <h3 class="subhead1" style={{color:"blue"}} > Learn More & Buy </h3>
        <img src={Img1} alt="" />
    </div>
  )
}
