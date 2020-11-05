import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

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

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            <div>
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
                    key={home.street}
                    street={home.street}
                    city={home.city}
                    state={home.state}
                    zip={home.zip_code}
                    price={home.price}
                    position={{
                        lat: home.lat,
                        lng: home.log
                    }}
                    icon={home.price < 600000  
                        ? {url: `https://www.clker.com/cliparts/R/g/O/v/U/h/google-maps-marker-for-residencelamontagne-md.png`, scaledSize: new window.google.maps.Size(20, 20)}
                        : {url: `https://www.clker.com/cliparts/W/0/g/a/W/E/map-pin-red.svg`, scaledSize: new window.google.maps.Size(35, 35)}
                        
                    }
                />
            ))}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h3>{this.state.selectedPlace.street}</h3>
                <h4>{this.state.selectedPlace.city}, {this.state.selectedPlace.state}, {this.state.selectedPlace.zip}</h4>
                <p>Price: ${this.state.selectedPlace.price}</p>
            </div>
            </InfoWindow>
        </Map>
        </div>
        )   
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZ7VU-onD4lHSYOhP1n8-ur44DWaJEkpk'
})(MapContainer);