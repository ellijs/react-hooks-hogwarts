import React, { useDebugValue, useState } from "react";
import Nav from "./Nav";
import PigPen from './PigPen'

import hogs from "../porkers_data";

function App() {
	const [ piggies, setPiggies ] = useState(hogs)
    const [ filterByGrease, setFilterByGrease ] = useState("All")
	const [ sortBy, setSortBy ] = useState("")

	console.log(piggies)
	const handleFilter = (value) => {
		setFilterByGrease(value)
		setHogs(value)
	}

	const setHogs = (filterByGrease) => {
		switch (filterByGrease) {
			case "All":
				setPiggies(hogs)
			    break;
			case "Greased":
				let greasedHogs = hogs.filter(piggy=> piggy.greased === true)
				setPiggies(greasedHogs)
				break;
			case "Non-Greased":
				let nonGreasedHogs = hogs.filter(piggy=> piggy.greased === false)
				setPiggies(nonGreasedHogs)
			    break;
			default:

				// fiter deeper in filtered array
				// set 으로 piggies가 바뀌었으므로 그 안에서 찾을 수 있음
				// let greasedHogs = piggies.filter(piggy=> piggy.greased === true)
				// setPiggies(greasedHogs)
		}
	}

	const handleSort = (value) => {
        setSortBy(value)
		sortPiggies(value)
	}

	const sortPiggies = (value) => {
		console.log(value)
		switch(value) {
			case "Name" :
                let sortByName = [...piggies]
			    sortByName.sort((a,b) => a.name > b.name ? 1: -1)
			    setPiggies(sortByName)
			    break;
			case "Light-Weight" :
			    let sortByLWeight = [...piggies]
			    sortByLWeight.sort((a,b) => a.weight > b.weight ? 1: -1)
			    setPiggies(sortByLWeight)
			    break;
			case "Heavy-Weight" :
                let sortByHWeight = [...piggies]
			    sortByHWeight.sort((a,b) => a.weight > b.weight ? -1: 1)
			    setPiggies(sortByHWeight)
			    break;
			default:
		}
	}

	return (
		<div className="App">
			<Nav handleFilter={handleFilter} handleSort={handleSort} />
			<PigPen hogs={piggies} />
		</div>
	);
}

export default App;
