import React, {Component} from 'react';
import './Weather-icons.css';
class Cloudy extends Component{
  render(){
    return(
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="sun">
              <div className="rays"></div>
          </div>
        </div>
    )
  }
}
export default Cloudy;
