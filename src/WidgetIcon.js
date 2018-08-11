import React, { Component } from 'react';
import SunShower from './Widget-Icons/sun-shower.js';
import ThunderStorm from './Widget-Icons/thunder-storm.js';
import Cloudy from './Widget-Icons/cloudy.js';
import Flurries from './Widget-Icons/flurries.js';
import Sunny from './Widget-Icons/sunny.js';
import Rainy from './Widget-Icons/rainy.js';
import Smoke from './Widget-Icons/Smoke.js';
import './WidgetIcon.css';
class WidgetIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type
    };
  }
  handleType(type){
    switch(type){
      case 'Clouds': return(<Cloudy/>)
      case 'Smoke': return(<Smoke/>)
      case 'Snow': return(<Flurries/>)
      case 'Drizzle': return(<Rainy/>)
      case 'Clear': return(<Sunny/>)
      case 'Thunderstorm': return(<ThunderStorm/>)
      case 'Rainy': return(<SunShower/>)
      case 'Rain': return(<Rainy/>)
      default: return(<Smoke/>)
    }
  }
  render() {
    return(
      this.handleType(this.state.type)
    )
  }
}
export default WidgetIcon;
