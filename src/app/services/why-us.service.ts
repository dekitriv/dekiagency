import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IWhyUs } from '../interfaces/i-whyUs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WhyUsService extends ApiService<IWhyUs> {

  constructor(public override http: HttpClient) {
    super(apiPaths.whyUs, http);
  }
}
