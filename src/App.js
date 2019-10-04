import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Titile';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css'
const API_KEY = "6fd18a7cc8141907cdbfea3b6b442f34";

class App extends React.Component{
constructor(props)
{
  super(props);
  // let sunRiseDate;
  // let sunSetDate;
}
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    coord:{
      lat:undefined,
      lon:undefined
    },
    sunrise:undefined,
    sunset:undefined,
    pressure:undefined,
    visibility:undefined,
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
    this.Sunrise(data.sys.sunrise);
    this.Sunset(data.sys.sunset);
    if(city && country)
    {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      coord:{
        lat:data.coord.lat,
        lon:data.coord.lon
      },
      sunrise:this.sunRiseDate,
      sunset:this.sunSetDate,
      pressure: data.main.pressure,
      visibility:data.visibility,
      error: ""
    })
    }else
    {
      this.setState({error:"Please enter city and country"})
    }
  }

  Sunrise = (arg1) => {
    console.log(arg1)
    let a=new Date(arg1*1000);
    console.log(a);
    this.sunRiseDate=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    console.log(this.sunRiseDate);  
  }
  Sunset = (arg2) => {
    console.log(arg2)
    let b=new Date(arg2*1000);
    console.log(b);
    this.sunSetDate=b.getHours()+":"+b.getMinutes()+":"+b.getSeconds();
    console.log(this.sunSetDate);
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 colOne"  >  
            <Title/> 
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-12 colTwo" >
          <Form getWeather={this.getWeather}/>
          <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          coord={this.state.coord}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          visibility={this.state.visibility}
          pressure={this.state.pressure}
          error={this.state.error}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;