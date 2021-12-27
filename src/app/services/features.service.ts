import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IFeatures } from '../interfaces/i-features';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService extends ApiService<IFeatures> {

  constructor(public override http: HttpClient) {
    super(apiPaths.features, http);
  }
}
