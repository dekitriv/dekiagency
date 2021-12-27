import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { INews } from '../interfaces/i-news';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends ApiService<INews> {

  constructor(public override http: HttpClient) {
    super(apiPaths.news, http);
  }
}
