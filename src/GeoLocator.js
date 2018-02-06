import React, {Component} from 'react';
class GeoLocator extends Component {
  apiGeolocationSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  }
  tryAPIGeolocation(){
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB8frKZkG2RgNhrxX2NXnq2Dqtpl7VoJsc`)
      .then(res=>res.json)
      .then()
  }
}
export default GeoLocator;
