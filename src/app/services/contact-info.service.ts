import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IContactInfo } from '../interfaces/i-contactInfo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService extends ApiService<IContactInfo>{

  constructor(public override http: HttpClient) {
    super(apiPaths.contactInfo, http);
  }
}
