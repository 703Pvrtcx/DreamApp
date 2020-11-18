import { Component, OnInit } from '@angular/core';
declare var mapboxgl;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor() {}

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiNzAzcHZydGN4IiwiYSI6ImNraG1qZ3EwOTBnN2kycHFxMzZmbjVpMngifQ.JjLGH4023AtntYZoKcQSVw';
    var map = new mapboxgl.Map({
          container: 'map',
           style: 'mapbox://styles/mapbox/streets-v11'
      });
      map.addControl(new  mapboxgl.NavigationControl());

      // Add geolocate control to the map.
      map.addControl( new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true 
        })
        );

  }
  


} 
