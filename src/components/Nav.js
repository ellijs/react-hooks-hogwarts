import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({handleFilter, handleSort}) => {

	// const filterStatus = (e) => {
	// 	handleFilter(e.target.value)
	// }
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			Greased:
			<select onChange={(e)=>handleFilter(e.target.value)}>
				<option>All</option>
				<option>Greased</option>
				<option>Non-Greased</option>
			</select>
			SortBy :
			<select onChange={(e)=>handleSort(e.target.value)}>
			    <option></option>
				<option>Name</option>
				<option>Light-Weight</option>
				<option>Heavy-Weight</option>
			</select>

			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
