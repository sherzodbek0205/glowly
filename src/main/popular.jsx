import React, { useEffect, useState } from "react";
import Products from '../products/data.json';

function Popular() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Products);
  });

  console.log(product);

  return (
   <div>
    <div className="flex flex-col gap-3 p-[32px] pb-[80px]">
      <h1 className="text-[32px] w-[195px]">Популярные</h1>
      <div className="flex justify-between gap-[43px] ">
        {product.map((item) => {
          return (
            <div className="flex flex-col gap-[15px]  " key={item.id}>
              <div className="flex rounded-[15px] shadow-inner w-[300px] h-[400px] bg-[#FFF5F8] items-center justify-center">
                <img
                  src={item.url}
                  alt={item.name}
                />
              </div>
              <p className="w-[273px] text-[16px] font-[500]">{item.name}</p>
              <div className="flex justify-between">
                <div className="rounded-[10px] bg-[#F2E9EB] px-[2px] py-[2px] items-center">
                  <p className="font-[500]">⭐{item.rate}</p>
                </div>
                <p className="font-[600]">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="flex flex-col gap-3 p-[32px] pb-[80px]">
      <h1 className="text-[32px] w-[195px]">Рекомендуем</h1>
      <div className="flex justify-between gap-[43px]">
        {product.map((item) => {
          return (
            <div className="flex flex-col gap-[15px] " key={item.id}>
              <div className="flex rounded-[15px] shadow-inner w-[300px] h-[400px] bg-[#FFF5F8] items-center justify-center">
                <img
                  src={item.url}
                  alt={item.name}
                />
              </div>
              <p className="w-[273px] text-[16px] font-[500]">{item.name}</p>
              <div className="flex justify-between">
                <div className="rounded-[10px] bg-[#F2E9EB] px-[2px] py-[2px] items-center">
                  <p className="font-[500]">⭐{item.rate}</p>
                </div>
                <p className="font-[600]">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="flex flex-col gap-3 p-[32px] pb-[80px]">
      <h1 className="text-[32px] w-[195px]">Топ продовыемые</h1>
      <div className="flex justify-between gap-[43px]">
        {product.map((item) => {
          return (
            <div className="flex flex-col gap-[15px] " key={item.id}>
              <div className="flex rounded-[15px] shadow-inner w-[300px] h-[400px] bg-[#FFF5F8] items-center justify-center">
                <img
                  src={item.url}
                  alt={item.name}
                />
              </div>
              <p className="w-[273px] text-[16px] font-[500]">{item.name}</p>
              <div className="flex justify-between">
                <div className="rounded-[10px] bg-[#F2E9EB] px-[2px] py-[2px] items-center">
                  <p className="font-[500]">⭐{item.rate}</p>
                </div>
                <p className="font-[600]">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Popular;
