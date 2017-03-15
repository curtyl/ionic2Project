import { Component, Input } from '@angular/core';

import { Geo } from './geo';

@Component({
  selector: 'my-geo-detail',
  templateUrl: 'geo-detail.html'
})

export class GeoDetailComponent {
  @Input()
  geo: Geo;
}
