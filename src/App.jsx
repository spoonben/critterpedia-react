import React, {useState, useEffect} from 'react';

import {fullList, monthMap} from './lists'

const App = () => {
  	const [searchText, setSearchText] = useState('')
  	const [resultsList, setResultsList] = useState(fullList)
    const [hemisphere, setHemisphere] = useState('northern')

  	useEffect(() => {
  		if (!searchText) {
  			setResultsList(fullList)
  			return
  		}
  		const newResults = resultsList.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
  		setResultsList(newResults)
  	}, [searchText]);

  	const handleChange = event => setSearchText(event.target.value)

    const getCalendarMonths = (availablitly) => (
      availablitly[hemisphere].map(month => monthMap[month])
    )

  	const ResultsDiv = ({results}) => (
            <div>
                {results.map(result => {
                    const availablitly = result.time.split(' - ');
                    return <div className="critterCard" key={result.name + result.critterNumber}>
                        <div className="number">#{result.critterNumber}</div>
                        <div className="name">{result.name}</div>
                        {result.shadowSize && <div>Shadow Size{result.shadowSize}</div>}
                        <div>Value: {result.value}</div>
                        <div className="availablitly">
                          <div>
                            {result.available && (<span className="card-title">Seasonability</span>)}
                            {result.available && (
                              <div className="calendar">{getCalendarMonths(result.available).map((month, index) => (
                              <span className="month">{month}</span>
                             ))}</div>)}
                           </div>
                          <div className="availablitly-spacer"/>
                           <div><span className="card-title">Current Active Hours:</span> <div>{result.time}</div></div>
                         </div>
                        <div className="location-wrap">
                          <div><span className="card-title">Location:</span> {result.location}</div>
                        </div>
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
