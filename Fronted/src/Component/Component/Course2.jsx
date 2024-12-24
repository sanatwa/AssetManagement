import React from "react"
import list from "../../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"

function Course2() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl"> 
          <span className="text-pink-500 "> SANATWA </span> 
          delighted to have you Here! :) 
          </h1>
        
            <p className="mt-12">
            This is Sanatwa Kumar Pandey from the Gopalganj,Bihar. I did the Collage from the Bhopal RGPV university in the 2017-2021.
            After that i got the chance to work in the Amazon in Kolkata for the 3 month,then i move the Kolkata to New Delhi and i got
            the opportunity to Work in the SEEDS FINcap PVT LTD as a IT executive and currently i worked there as ASST.Manager IT !
            </p> 
            <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back</button>
            </Link>
            </div> 
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ) )
            }
            </div>
    </div>
    </>
  )
}

export default Course2
