import React from 'react'
import Navbar from '../navbar/navbar'
import Popular from './../main/popular';
import Footer from './../footer/footer';

export default function Category() {
  return (
    <>
     <Navbar/>
     <div className="w-[100%] h-[450px] flex items-center p-10">
      <h1 className="text-[48px] font-normal w-[800px]">Сыворотки для лица</h1>
      <img className="h-[450px] w-[75%]" src="/images/caef9a74a0dc65942630e0b4457386d1.png" alt="" />
     </div>
     <Popular/>
     <Footer/>
    </>
  )
}
