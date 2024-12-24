import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../../public/list.json"
import Cards from "./Cards";
function Asset() {
  const filterdata=list.filter((data)=>data.catogery==="Cart");
 
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (<>
  <div className="max-w-screen-2x1 container mx-auto md:px-20 px-">
    <div>
    <h1 className="font-semibold text-xl pb-2">Asset to be Allocated</h1>
    <p>
      This All the IT asset to be allocated the New Joinee and also replacing the old/Bad conditions assets.  
    </p>
    </div>
  
  <div>
  <Slider {...settings}>
   {filterdata.map((item)=>(
    <Cards item={item}key={item.id}/>
   ))}

      </Slider>
  </div>
  </div>
  </>  
  )
}

export default Asset
