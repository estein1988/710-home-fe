import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import red_icon from '../assets/red_icon.png'
import green_icon from '../assets/green_icon_new.png'


const mapStyles = {
    width: '70%',
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
                zoom={11}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 39.75,
                        lng: -105
                    }
                }
            >
            {this.props.allHomes.map(home => (
                <Marker 
                    onClick={this.onMarkerClick}
                    key={home.id}
                    image={home.thumbnail}
                    street={home.line}
                    city={home.city}
                    state={home.state}
                    zip={home.postal_code}
                    price={home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    position={{
                        lat: home.lat,
                        lng: home.lon
                    }}
                    icon={home.price < 500000
                        ? {url: green_icon, scaledSize: new window.google.maps.Size(28, 28)}
                        : {url: red_icon, scaledSize: new window.google.maps.Size(28, 28)}
                    }
                />
            ))}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>
                    <h3>
                        {this.state.selectedPlace.street}<br></br>
                        {this.state.selectedPlace.city}, {this.state.selectedPlace.state} {this.state.selectedPlace.zip}
                    </h3>
                    <p>${this.state.selectedPlace.price}</p>
                    <img class="ui small centered circular image" src={this.state.selectedPlace.image} alt=""></img>
                </div>
            </InfoWindow>
        </Map>
        
        )   
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZ7VU-onD4lHSYOhP1n8-ur44DWaJEkpk'
})(MapContainer);