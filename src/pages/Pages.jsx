import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import { Routes, Route } from 'react-router-dom';

function Pages() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:serach" element={<Searched />} />
		</Routes>
	);
}

export default Pages;
