import React from 'react';

class Title extends React.Component{
    render(){
        return(
            <div style={{lineHeight:"2em",verticalAlign:"middle",display:"inline-block"}}>  
                <h3 style={{color:"white"}}>Weather App</h3>
                <h6 style={{color:"white"}}>Know the weather conditions of anywhere</h6>
            </div>
        );
    }
}
export default Title;