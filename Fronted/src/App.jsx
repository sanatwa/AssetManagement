import React from "react";
import Sanatwa from "./Sanatwa/Sanatwa";
import{ Route, Routes } from "react-router-dom"
import Course from "./Course/Course";
import Signup from "./Component/Component/Signup";


function App() {
  return (
    <>
    <div className="">
       <Routes>
          <Route path="/" element={<Sanatwa/>}/>
          <Route path="/Course2" element={<Course/>}/> 
          <Route path="/Signup" element={<Signup/>}/> 


        </Routes>
        </div>
 
    </>
  );
}

export default App;

