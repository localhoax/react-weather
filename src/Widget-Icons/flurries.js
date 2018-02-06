import React, {Component} from 'react';
import './Weather-icons.css';
class Flurries extends Component{
  render(){
    return(
      <div className="icon flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    )
  }
}
export default Flurries;
