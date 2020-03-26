import React, {useState, useEffect} from 'react';

import {fullList} from './lists'

const App = () => {
  	const [searchText, setSearchText] = useState('')
  	const [resultsList, setResultsList] = useState(fullList)

  	useEffect(() => {
  		if (!searchText) {
  			setResultsList(fullList)
  			return
  		}
  		const newResults = resultsList.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
  		setResultsList(newResults)
  	}, [searchText]);

  	const handleChange = event => setSearchText(event.target.value)

  	const ResultsDiv = ({results}) => (
            <div>
                {results.map(result => {
                    return <div className="critterCard" key={result.name + result.critterNumber}>
                        <div className="number">#{result.critterNumber}</div>
                        <div className="name">{result.name}</div>
                        <div>Location: {result.location}</div>
                        {result.shadowSize && <div>Shadow Size{result.shadowSize}</div>}
                        <div>Value: {result.value}</div>
                        <div>Time: {result.time}</div>
                        <div>Month (Hemisphere): {result.month}</div>
                    </div>
                })}
            </div>
        )

    return (
      <div className="main">
        <h1>Animal Crossing Critter Search</h1>
        <input type="text" placeholder="Search By Name" value={searchText} onChange={handleChange}></input>
        <ResultsDiv results={resultsList}/>
      </div>
    );
}

export default App;
