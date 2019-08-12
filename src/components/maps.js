import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Firebase from "../model/firebase";

const mapStyles = {
  width: "100%",
  height: "80%",
  margin: "10px auto"
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      latlng: { lat: 10.783921241760254, lng: 106.70357513427734 }
    };
  }

  componentDidMount() {
    Firebase.database()
      .ref("/Location")
      .on("value", snapshot => {
        this.setState({ latlng: snapshot.val() });
      });
  }

  render() {
    const { latlng } = this.state;
    const {google} = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={20}
        style={mapStyles}
        initialCenter={{
          lat: latlng.lat,
          lng: latlng.lng
        }}
      >
        <Marker
          position={{ lat: latlng.lat, lng: latlng.lng }}
          icon={{
            url: "https://image.flaticon.com/icons/svg/64/64339.svg",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(24, 24)
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAVJIlizheg-Yo8usY_OnRl5nEgvpa8OVA"
})(MapContainer);
