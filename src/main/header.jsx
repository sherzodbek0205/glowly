import React from 'react'

function Header() {
  return (
    <div className=" header flex w-[100%] h-[500px] pl-[80px]  items-center overflow-hidden " >
    <div className="flex flex-col gap-[13px] ">
     <h1 className="w-[522px] text-[48px]">Будь нежной с кожей каждый день</h1>
     <p className="w-[410px] text-[15px] text-[#8C8C8C]">Anua Niacinamide 10% — эффективное средство для выравнивания тона кожи, уменьшения воспалений и гиперпигментации.</p>
     <button className="w-[180px] h-[45px] border-[1px] border-[#414141] text-[15px]">Подробнее</button>
    </div>
    
    </div>

  )
}

export default Header
