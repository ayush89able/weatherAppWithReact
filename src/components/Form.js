import React from 'react';
import $ from 'jquery'; 
class Form extends React.Component{
    clear=()=>{
        console.log("clear");
        $("input").val('');
    } 

    render(){
       
        return(
            <div className="card">
            <form onSubmit={this.props.getWeather} className="form-group">
                <label style={{marginLeft:"0.5em"}}>Enter City</label>
                <input type="text" name="city"  style={{marginLeft:"0.5em",width:"95%"}} className="form-control"/>  
                <label style={{marginLeft:"0.5em"}}>Enter Country</label>
                <input type="text" name="country"  style={{marginLeft:"0.5em",width:"95%"}} className="form-control"/>
                <button className="btn btn-primary" style={{display:"block",margin:"auto",marginTop:"1em"}}>Get Weather</button>
            </form>
            <button className="btn btn-primary" style={{display:"block",margin:"auto"}} onClick={this.clear}>Clear</button>
            </div>
        );
    }
}
export default Form;