import React from "react";
import { Component } from "react";
import {Map,GoogleApiWrapper,Marker} from "google-maps-react";
import "./head.css";

 export default class MapContainer extends Component{
   
  render(){
    return(
      <Map className="map"
      google={this.props.google}
      zoom={15}
initialCenter={{lat:15.447712,lng:73.854061}}>
<Marker position={{lat:15.447712,lng:73.854061}}/>
</Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBM0VUnjNgQP-Vcvugn8DrtAE7xeGlfUbU"

})(MapContainer);