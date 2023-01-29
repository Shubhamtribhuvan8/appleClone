import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Contact from "../Component/ContactUs";
import PageNotFound from "../Component/PageNotFound";
import Store from "../Component/Store";
import Mac from "../Component/Mac";
import Watch from "../Component/Watch";
import Airpods from "../Component/Airpods";
import TvHome from "../Component/TvHome";
import OnlyOnApple from "../Component/OnlyOnApple";
import Accessories from "../Component/Accessories";
import Support from "../Component/Support";
import Ipad from "../Component/Ipad";
import Iphone from "../Component/Iphone";
import Image from "../Component/Image";
function RoutesComp(props) {
  return (
    <Routes>
      <Route path="/image" element={<Image/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Mac" element={<Mac />} />
      <Route path="/Ipad" element={<Ipad/>} />
      <Route path="/Iphone" element={<Iphone />} />
      <Route path="/Watch" element={<Watch />} />
      <Route path="/Airpods" element={<Airpods />} />
      <Route path="/TvHome" element={<TvHome />} />
      <Route path="/OnlyOnApple" element={<OnlyOnApple />} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesComp;