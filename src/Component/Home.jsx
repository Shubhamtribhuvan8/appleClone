import React from "react";
import A4Apple from "../Icomponent/A4Apple";
import Apple from "../Icomponent/Apple";
import Apple2 from "../Icomponent/Apple2";
import Apple4 from "../Icomponent/Apple4";
function Home(props) {
  return (
    <div>
     <Apple/>
     <Apple2/>
     <Apple4/>
     <A4Apple/>
     {/* <Scroll/> */}
    </div>
  );
}

export default Home;