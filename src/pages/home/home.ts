import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Geo } from './geo';
import { GeoService } from './geo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GeoService]
})
export class HomePage implements OnInit {

  geos: Geo[];
  selectedGeo: Geo;

  constructor(private GeoService: GeoService) { }
  getGeo(): void {
    this.GeoService.getGeo().then(geos => this.geos = geos);
  }
  ngOnInit(): void {
    this.getGeo();
  }
  onSelect(geo: Geo): void {
    this.selectedGeo = geo;
    }

}
