import React, {Component} from 'react';
import './Weather.css';
import WidgetIcon from './WidgetIcon.js';
class Weather extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount()  {
    // Call the first time the component is loaded, right before the component is added to the page
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea664939fa1be127bc54c0b14e3842d9`)
          .then(res => res.json())
          .then(res=>{
            this.setState({
              willWork: true,
              city: res.name,
              country: res.sys.country,
              temp: (res.main.temp - 273.15),
              minTemp: (res.main.temp_min- 273.15),
              maxTemp: (res.main.temp_max- 273.15),
              description: res.weather[0].main,
              humidity: res.main.humidity,
              pressure: res.main.pressure,
              windspeed: res.wind.speed
            });
        });
      },
      (err)=>{
        console.log('Error: ',err);
      },
      {
        enableHighAccuracy: false,
        timeout: 1000,
        maximumAge: 0
      }
    );
  }
  componentDidMount() {
    // Called after the component has been rendered in the page
    
  }
  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed.
  }
  componentWillUpdate(nextProps, nextState){
    // Called When the props and/or state changes

  }
  componentWillUnmount(){
    // Called when the component is removed
  }
  render(){
    let tempC = (1.0*this.state.temp).toFixed(1);
    let tempF = (1.8*tempC + 32).toFixed(1);
    if(this.state.willWork){
      return(
        <div className="main-widget">
          <h2 className='heading'>Today's Weather</h2>
          <WidgetIcon type={this.state.description}/>
          <h3 className='information temp' style={{marginTop:10+"px"}}>{tempC} ℃ | {tempF} ℉</h3>
          <p>{this.state.description}</p>
          <p>{this.state.city}, {this.state.country}</p>
        </div>
      );
    } else {
      return(
        <div className='main-widget'>
          <h3 className='information'>Couldn't Fetch your location, make sure your browser supports Geolocation.</h3>
        </div>
      )
    }
  }
}
export default Weather;
