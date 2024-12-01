import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/main";
import About from "../about/about";
import Search from "../search/search";
import Category from "../category/category";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/search" element={<Search />} />
			<Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
		</Routes>
	);
}

export default AppRoutes;
