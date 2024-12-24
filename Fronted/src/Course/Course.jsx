import React from "react"
import Navbar from "../Component/Component/Navbar"
import Course2 from "../Component/Component/Course2"
import Footer from "../Component/Footer"


function Course() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
     <Course2/>
    </div>
    <Footer/>
    </>

  )
}

export default Course
