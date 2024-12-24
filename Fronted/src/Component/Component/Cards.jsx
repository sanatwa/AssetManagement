import React from "react"

function Cards({ item }) {
  
  return (
    <>
    <div className="mt-4 my-3 p-3 ">
    <div className="card bg-base-1000 w-92 shadow-xl hover:scale-105 duration-200  ">
  <figure>
    <img
      src={item.image} alt="Images" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catogery}</div>
    </h2>
    <p>{item.tittle}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer py-1 px-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Replace</div>
      <div className="cursor-pointer py-1 px-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">New</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
