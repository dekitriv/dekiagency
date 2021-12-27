import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiPaths } from '../config/api';
import { ApiService } from './api.service';
import { INav } from '../interfaces/i-nav';

@Injectable({
  providedIn: 'root'
})
export class NavService extends ApiService<INav>{

  constructor(public override http: HttpClient) {
    super(apiPaths.nav, http);
  }
}
