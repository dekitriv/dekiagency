import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IPricing } from '../interfaces/i-pricing';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PricingService extends ApiService<IPricing> {

  constructor(public override http: HttpClient) {
    super(apiPaths.pricing, http);
  }
}
