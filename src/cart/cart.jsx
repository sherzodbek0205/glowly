import React from "react";

const Cart = ({ isOpen, setIsOpen }) => {
  const cartItems = [
    {
      name: "Ma:nyo Bifida Biome Complex Ampoule",
      quantity: 1,
      price: "690 000",
      image: "/images/62c1f4e3a354024159310082881fa4fc.png"
    }
  ];

  const totalPrice = {
    productTotal: 690000,
    delivery: 30000,
    total: 720000
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 ">
        <div className="bg-white w-full sm:w-96 p-6 relative h-[400px]">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            ❌
          </button>


          <h2 className="text-xl font-bold mb-4">Корзина</h2>


          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.quantity} шт</p>
              </div>
              <p className="text-sm font-bold">{item.price} сум</p>
            </div>
          ))}


          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Стоимость продуктов</span>
              <span>{totalPrice.productTotal} сум</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Стоимость доставки</span>
              <span>{totalPrice.delivery} сум</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Итоги</span>
              <span>{totalPrice.total} сум</span>
            </div>
          </div>

          <button className="mt-4 bg-black text-white w-full py-3 rounded hover:bg-gray-800">
            Оформить заказ
          </button>
        </div>
      </div>
    )
  );
};

export default Cart;
