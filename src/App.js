import React from 'react';

import Title from './components/Titile';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "6fd18a7cc8141907cdbfea3b6b442f34";

class App extends React.Component{

  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined  
  }

  getWeather= async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log(city);
    const country = e.target.elements.country.value;
    console.log(country);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(city === true && country === true)
    {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    }
  }
  render(){
    return(
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;