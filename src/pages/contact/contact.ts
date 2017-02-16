import { Component, OnInit } from '@angular/core';

import { Geo } from './geo';
import { GeoService } from './geo.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [GeoService]
})
export class ContactPage implements OnInit {

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
