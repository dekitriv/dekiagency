import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IPartners } from '../interfaces/i-partners';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PartnersService extends ApiService<IPartners> {

  constructor(public override http: HttpClient) {
    super(apiPaths.partners, http);
  }
}
