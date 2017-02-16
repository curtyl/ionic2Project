import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsMarkerOptions, GoogleMapsLatLng, GoogleMapsMarker} from 'ionic-native';

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage {

    map: GoogleMap;

    constructor(public navCtrl: NavController, public platform: Platform) {
        platform.ready().then(() => {
            this.loadMap();
        });
    }

    loadMap(){

        let location = new GoogleMapsLatLng(-34.9290,138.6010);

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });

        let markerOptions: GoogleMapsMarkerOptions = {
          position: location,
          title: 'Ionic'
        };

        this.map.addMarker(markerOptions)
        .then((marker: GoogleMapsMarker) => {
          marker.showInfoWindow();
        });
}

    }
