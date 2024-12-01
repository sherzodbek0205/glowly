import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Brands from "../main/brands";
import Popular from "../main/popular";

const products = [
	{ id: 1, title: "Солнезащитные средства", image: "/images/13bac79256c45f17f8e6a09368ad4910.png" },
	{ id: 2, title: "Сыворотки", image: "/images/525927b271db5aa0bc6750c635ffb0bb.png" },
	{ id: 3, title: "Освещающие средства", image: "/images/62c1f4e3a354024159310082881fa4fc.png" },
	{ id: 4, title: "Крема", image: "/images/b7b22c3d2a73b1143636363c716dcab0.png " },
	{ id: 5, title: "Тоники и эссенции", image: "/images/bf5430769f28ed777172a0e7f595bcb6.png" },
	{ id: 6, title: "Очищающие средства", image: "/images/9424f78fb82e036c5d32417f4452311b.png" },
];

const Search = () => {
	return (
		<>
			<Navbar />
			<div className="category flex flex-col gap-[80px] w-[100%] h-[500px] ">
				<div className="flex items-center justify-between pr-20">
					<div></div>
					<div className="flex items-center gap-[50px] ">
						<div className="flex items-center">
							<input
								type="text"
								className="text-[64px] w-[400px] border-none focus:outline-none p-2  placeholder-[#C1C1C1]"
								placeholder="хочу купить"
							/>
						</div>
						<button>
							<svg
								width="46"
								height="42"
								viewBox="0 0 46 42"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.125022 18.0833L33.9175 18.0833L20.7925 4.95833L24.9167 0.834167L45.0825 21L24.9167 41.1658L20.7925 37.0417L33.9175 23.9167L0.125022 23.9167L0.125022 18.0833Z"
									fill="#C1C1C1"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="flex gap-[25px] justify-center">
					{products.map((product) => (
						<div className="flex flex-col gap-[18px] items-center font-medium">
							<div
								key={product.id}
								className="flex flex-col items-center bg-[#FFF5F8] p-4 rounded-lg shadow-md w-[200px] h-[200px]"
							>
								<img
									src={product.image}
									alt={product.title}
									className="w-32 h-32 object-cover mb-2"
								/>
							</div>
							<span className="text-center w-[150px] text-[13px]">{product.title}</span>
						</div>
					))}
				</div>
			</div>
			<Popular />
			<Footer />
		</>
	);
};

export default Search;
