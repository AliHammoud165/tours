import React from 'react'
import './toure.css'
import { useState } from 'react'
import { useEffect } from 'react';
const toure = () => {
    let APIdata=[];
    const [data,setdata]=useState([]);
useEffect(()=>{
    async function load(){
        const response=await fetch("https://course-api.com/react-tours-project")
        APIdata=await response.json();
        setdata(APIdata);
    }
    load();
},[])

const deletee=(id)=>{
    const neww=data.filter((newdata)=>newdata.id!==id)
    setdata(neww)
}
  return (
  <>
  <div className='main'>
  <div className="titel">Our Tours</div>
  {data.map((tour)=>(
  <div className="content">
    <div className="imag"><img src={tour.image} alt="" /></div>
    <div className="maintxt"><div className='txt'>{tour.name}</div> <div className='price'>${tour.price}</div></div>
    <div className='pa'>{tour.info}</div>
  <div className='btn'><button onClick={()=>deletee(tour.id)} className='un'>NOT INTERESTED</button></div>
  </div>))}
  </div>
  </>
  )
}

export default toure
