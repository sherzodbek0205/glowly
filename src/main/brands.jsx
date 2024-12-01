import React from 'react';
import roundLab from "../brands/2e99797657b8407dc90b2b897300b200.png";
import cosrx from "../brands/cosrx.png";
import anua from "../brands/anua.png";
import theOrdinary from "../brands/theordinary.png";
import manyo from "../brands/manyo.png";
import skin1004 from "../brands/skin1004 1.png";
import drJart from "../brands/dr.jart+ 1.png";


function Brands() {
  return (
    <div className="flex justify-between items-center ">
   <img className="w-[309px] h-[309px] " src={roundLab} alt="" />
   <img className="w-[112px] h-[112px]" src={cosrx} alt="" />
   <img className="w-[77px] h-[77px] " src={anua} alt="" />
   <img className='w-[101px] h-[56px]' src={theOrdinary} alt="" />
   <img className="w-[96px] h-[21px]" src={manyo} alt="" />
   <img className="w-[248px] [h-70px]" src={skin1004} alt="" />
   <img className="w-[114px] h-[27px]" src={drJart} alt="" />
    </div>
  );
}

export default Brands;
