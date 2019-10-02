import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
               {this.props.city && this.props.country && <h6>Location: {this.props.city} , {this.props.country}</h6>}
               {this.props.temperature && <h6>Temperature: {this.props.temperature} °C</h6>}         
               {this.props.description && <h6>Description: {this.props.description} </h6>}
               {this.props.humidity && <h6>Humidity: {this.props.humidity} %</h6>}
            </div>
        );
    }
}
export default Weather;