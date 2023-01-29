// import { Link } from "react-router-dom";
// function Nav(props) {
//   var routes = [
//     {
//       title: "Home",
//       path: "/",
//       // img:"https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//       title: "Store",
//       path: "/Store",
//     },
//     {
//       title: "Mac",
//       path: "/Mac",
//     },
//     {
//       title: "Ipad",
//       path: "/Ipad",
//     },
//     {
//       title: "Iphone",
//       path: "/Iphone",
//     },
//     {
//       title: "Watch",
//       path: "/Watch",
//     },
//     {
//       title: "Airpods",
//       path: "/Airpods",
//     },
//     {
//       title: "Tv&Home",
//       path: "/TvHome",
//     },
//     {
//       title: "Only On Apple",
//       path: "/OnlyOnApple",
//     },
//     {
//       title: "Accessories",
//       path: "/Accessories",
//     },
//     {
//       title: "Support",
//       path: "/Support",
//     },
//     {
//       title: "contact",
//       path: "/contact",
//     },
//   ];

//   var divStyle = {
//     padding: "20px",
//     backgroundColor: "black",
//     textAlign: "right",
//   };
//   var aStyle = {
//     color: "white",
//     marginRight: "50px",
//     textDecoration: "none",
//   };
//   return (
//     <div style={divStyle}>
//       {routes.map((route, index) => {
//         return (
//           <Link style={aStyle} key={index + 1} to={route.path}>{route.title}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// export default Nav;


import { Link } from "react-router-dom";
import Img from '../image.avif';
import Img1 from '../image1.png';

function Nav(props) {
  var routes = [
    {
      img:Img,
      path:"/image"
    },
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Store",
      path: "/Store",
    },
    {
      title: "Mac",
      path: "/Mac",
    },
    {
      title: "Ipad",
      path: "/Ipad",
    },
    {
      title: "Iphone",
      path: "/Iphone",
    },
    {
      title: "Watch",
      path: "/Watch",
    },
    {
      title: "Airpods",
      path: "/Airpods",
    },
    {
      title: "Tv&Home",
      path: "/TvHome",
    },
    {
      title: "OnlyOnApple",
      path: "/OnlyOnApple",
    },
    {
      title: "Accessories",
      path: "/Accessories",
    },
    {
      title: "Support",
      path: "/Support",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  var divStyle = {
    backgroundColor: "black",
    textAlign: "right",
    width: "100%",
    display: "flex",
    backgroundColor: "black",
    fontSize: "10px",
    position: "fixed",
    top: "0px",
    fontWeight: "bold",
    padding: "4px",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  var imgStyle = {
    width: "36px"
  }
  return (
    <div style={divStyle}>
      {routes.map((route, index) => {
        return (
          <Link style={aStyle} key={index + 1} to={route.path}>
            <img src={route.img} style={imgStyle} /> 
            {route.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Nav; 
