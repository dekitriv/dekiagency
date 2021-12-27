import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { ISocials } from '../interfaces/i-socials';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SocialsService extends ApiService<ISocials> {

  constructor(public override http: HttpClient) {
    super(apiPaths.socials, http);
  }
}
