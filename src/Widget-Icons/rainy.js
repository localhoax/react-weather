import React, {Component} from 'react';
import './Weather-icons.css';
class Rainy extends Component{
  render(){
    return(
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
    )
  }
}
export default Rainy;
