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
    this.state = {};
  }
  render() {
    return(
      <div>
        {{
          'Clouds': (
            <Cloudy />
          ),
          'Smoke': (
            <Smoke />
          ),
          'Snow':(
            <Flurries />
          ),
          'Drizzle':(
            <Rainy />
          ),
          'Clear':(
            <Sunny />
          ),
          'Thunderstorm':(
            <ThunderStorm />
          ),
          'Rainy':(
            <SunShower />
          )
        }[this.props.type]}
      </div>
    );
  }
}
export default WidgetIcon;
