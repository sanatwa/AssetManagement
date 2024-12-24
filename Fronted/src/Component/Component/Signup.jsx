import React from "react"
import { Link } from "react-router-dom"
import Login from "./Login"

function Signup() {
 return(<>
     <div className="flex h-screen items-center justify-center ">
     <div className="w-[600px]">
        <div className="modal-box">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
        </Link>
        </form>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
            <span>Name</span>
            <br/>
            <input type="text"
             placeholder="Enter your FullName" className="w-80 px-3 py-1 border rounded-md"
             
              />
            
            </div>

            <div className="mt-4 space-y-2">
            <span>Mobile Number</span>
            <br/>
            <input type="Number"
             placeholder="Enter your Mobile Number" className="w-80 px-3 py-1 border rounded-md" />
            </div>

            {/* Login */}
         <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded-md   " />
         </div>
         {/* Password */}
            <div className="mt-4 space-y-2">
            <span>Password</span>
            <br/>
            <input type="Password" placeholder="Enter your Password" className="w-80 px-3 py-1 border rounded-md   " />
          </div>
          {/* Button  */}
               <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 dureation-200">
                    Signup</button>
                <p className="text-xl">Have Account? {" "}  
                    <button
                      
                     className="underline text-blue-500 cursor-pointer"
                     onClick={()=> 
                        document.getElementById("my_modal_3").showModal()
                     }
                    >
                    Login
                    </button>{" "}
                     <Login/>
                     </p>
                </div> 

         </div>
    </div>
     </div>
 </>
)
}

export default Signup
