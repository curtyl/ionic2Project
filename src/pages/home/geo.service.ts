import { Injectable } from '@angular/core';

import { Geo } from './geo';
import { GEOS } from './mock-geo';

@Injectable()
export class GeoService {
  getGeo(): Promise<Geo[]> {
  return Promise.resolve(GEOS);
}
}
