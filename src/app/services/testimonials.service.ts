import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { ITestimonials } from '../interfaces/i-testimonials';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService extends ApiService<ITestimonials>{

  constructor(public override http: HttpClient) {
    super(apiPaths.testimonials, http);
  }
}
