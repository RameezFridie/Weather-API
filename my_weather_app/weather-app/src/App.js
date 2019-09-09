import React from 'react';

import './App.css';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


// API key attained from weather site
const API_KEY = "14f707858feeae33ededbebb7260f7d7"


class App extends React.Component {
  // Setting initial state
  state = {
    temp: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  // Async function that waits for input from user to fetch the data requested
  get_weather = async (e) => {
    // Prevents the page from reloading on click
    e.preventDefault()
    // Variable that takes input from user in form document
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    // Fetches data requested
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    // Makes data readable 
    const data = await api_call.json()
  //  If inputted data matches fetch data then change state
    if (city === data.name) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        max: data.main.temp_max,
        min: data.main.temp_min,
        error:""
      })
    }
    else{
      // If data does not match display error message
      this.setState({
        temp: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        max: null,
        min: null,
        error:"404 - NOT FOUND"
    })
  }
}

  render() {
    return (
      // Main wrapper
      // Classnames to link to css style sheet
       <div className="wrapper">
         <div className="main">
           <div className="title-container">
             <div className="row">
               <div className="col-xs-5 title container">
              {/* Class title  */}
               <Titles/>
               </div>
               <div className="col-xs-7 form-container">
                 {/* Form class */}
               <Form get_weather={this.get_weather}/>
               {/* Weather class with props to pass through to weather component */}
                <Weather
                // State props
                temp={this.state.temp}
                max={this.state.max}
                min={this.state.min}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
               </div>
             </div>
           </div>
         </div>
       </div>
    );
  }
}


export default App;
