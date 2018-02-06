import React, {Component} from 'react';
import './Weather-icons.css';
class Sunny extends Component{
  render(){
    return(
        <div className="icon sunny">
          <div className="sun">
              <div className="rays"></div>
          </div>
        </div>
    )
  }
}
export default Sunny;
