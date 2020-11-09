import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import red_icon from '../assets/red_icon.png'

const mapStyles = {
    width: '90%',
    height: '60vh',
}

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  
        activeMarker: [],        
        selectedPlace: []        
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })

    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            
            <Map
                google={this.props.google}
                zoom={10.5}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 39.79,
                        lng: -104.9
                    }
                }
            >
            {this.props.allHomes.map(home => (
                <Marker 
                    onClick={this.onMarkerClick}
                    key={home.id}
                    street={home.line}
                    city={home.city}
                    state={home.state}
                    zip={home.postal_code}
                    price={home.price}
                    position={{
                        lat: home.lat,
                        lng: home.lon
                    }}
                    icon={{url: red_icon, scaledSize: new window.google.maps.Size(28, 28)}}
                    // icon={home.price < 600000  
                    //     ? {url: require('../assets/google_map_red.png'), scaledSize: new window.google.maps.Size(20, 20)}
                    //     : {url: require('../assets/google_map_red.png'), scaledSize: new window.google.maps.Size(10, 10)}
                    // }
                />
            ))}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>
                    <h3>State {this.state.selectedPlace.state}</h3>
                </div>
            </InfoWindow>
        </Map>
        
        )   
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZ7VU-onD4lHSYOhP1n8-ur44DWaJEkpk'
})(MapContainer);