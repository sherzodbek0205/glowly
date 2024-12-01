import React,{useState} from 'react'


function Footer() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;


    if (/^[0-9]*$/.test(inputValue)) {
      setPhone(inputValue);
    }
  };

  const handleSubmit = () => {
    alert(`Telefon raqami: +998${phone}`);
  };
  return (
   <div>
    <div className="footer flex p-[20px]  justify-around mt-[212px] mb-0 w-[100%] h-[400px] ">
  <div className="flex flex-col gap-[15px]  text-[20px] text-[#808080]">
   <p>Как выбрать товар</p>
   <p>Оплата и доставка</p>
   <p>Обратный связь</p>
   <p>Возврат и обмен</p>
   <p>Как оформить заказ</p>
  </div>
  <div className="flex flex-col gap-[15px] text-[20px] text-[#808080]">
   <p>О компании</p>
   <p>Акции и скидки</p>
   <p>Блог</p>
   <p>Контакты</p>
  </div>
  <div className="flex flex-col gap-[15px] text-[20px] text-[#808080]">
   <h2 className="font-[700] text-[black]">Выгода с подпиской</h2>
   <p className="text-[16px] w-[432px]">Подпишитесь и получите акции, бонусы и промокоды
   для покупки любых товаров</p>
   <div className="flex items-center gap-[7px]" >
   <div className="flex items-center justify-center ">
      <div className="flex items-center bg-[#FFF5F8] border border-gray-300 rounded-full px-4 py-2 w-80">
        <span className="text-gray-700 text-lg mr-2">+998</span>
        <input
          type="text"

          value={phone}
          onChange={handleChange}
          maxLength={9}
          placeholder="XX XXX XX XX"
          className="flex-1 bg-transparent focus:outline-none text-gray-700 "
        />
        <button
          onClick={handleSubmit}
          className="ml-2 bg-black text-white rounded-full p-2 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
</div>
  </div>

    </div>
    <div className="flex items-center pl-[82px] h-[56px] text-[14px] text-[#FFFFFF] bg-[black]">
    © 2024 Glowy Все права защищены.
    </div>
    </div>
  )
}

export default Footer
