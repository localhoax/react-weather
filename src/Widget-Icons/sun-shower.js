import React, {Component} from 'react';
import './Weather-icons.css';
class SunShower extends Component{
  render(){
    return(
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
    )
  }
}
export default SunShower;
