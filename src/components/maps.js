import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Firebase from "../model/firebase";

const mapStyles = {
  width: "100%",
  height: "80%",
  margin: "10px auto"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: { lat: 16.463713, lng: 107.590866 }
    };
  }

  componentDidMount() {
    let path = this.props.index;
    if (this.props.index === "admin") path = "";
    Firebase.database()
      .ref(`/${path}`)
      .on("value", snapshot => {
        this.setState({ latlng: snapshot.val() });
      });
  }

  render() {

    const { latlng } = this.state;
    const { google } = this.props;
    let items = [];
    if (this.props.index === "admin") {
      for (const [location, latlngg] of Object.entries(latlng)) {
        items.push(<Marker
          position={{ lat: latlngg.lat, lng: latlngg.lng }}
          icon={{
            url: "https://image.flaticon.com/icons/svg/64/64339.svg",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(24, 24)
          }}
        />)
      }
    } else {
      items.push(<Marker
        position={{ lat: latlng.lat, lng: latlng.lng }}
        icon={{
          url: "https://image.flaticon.com/icons/svg/64/64339.svg",
          anchor: new google.maps.Point(10, 10),
          scaledSize: new google.maps.Size(24, 24)
        }}
      />)
    }
    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{
          lat: latlng.lat,
          lng: latlng.lng
        }}
      >
        {items}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAVJIlizheg-Yo8usY_OnRl5nEgvpa8OVA"
})(MapContainer);
