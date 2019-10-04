import React from 'react';

class Weather extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(this.props.sunrise);
    }

    componentDidMount()
    {
      
    }
   
    
    render(){
        return(
            <div style={{marginTop:"4em"}} onLoad={this.Sunset}>
               {this.props.city && this.props.country && <h6 style={{textAlign:"center"}}>Location: {this.props.city} , {this.props.country}</h6>}
               {this.props.temperature && <h6 style={{textAlign:"center"}}>Temperature: {this.props.temperature} °C</h6>}         
               {this.props.description && <h6 style={{textAlign:"center"}}>Description: {this.props.description} </h6>}
               {this.props.humidity && <h6 style={{textAlign:"center"}}>Humidity: {this.props.humidity} %</h6>}
               {this.props.coord.lat && <h6 style={{textAlign:"center"}}>Langitude: {this.props.coord.lat}</h6>}
               {this.props.coord.lon && <h6 style={{textAlign:"center"}}>Longitude: {this.props.coord.lon}</h6>}
               {this.props.sunrise && <h6 style={{textAlign:"center"}}>Sunrise: {this.props.sunrise}</h6>}
               {this.props.sunset && <h6 style={{textAlign:"center"}}>Sunset: {this.props.sunset}</h6>}
               {this.props.pressure && <h6 style={{textAlign:"center"}}>Pressure: {this.props.pressure}</h6>}
               {this.props.visibility && <h6 style={{textAlign:"center"}}>Visibility: {this.props.visibility}</h6>}
               {this.props.error && <h6 style={{textAlign:"center"}}>{this.props.error} </h6>}
            </div>
        );
    }
}
export default Weather;