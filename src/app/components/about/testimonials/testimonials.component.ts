import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private testimonialsService: TestimonialsService) {}
  public testimonials: any[] | undefined;
  ngOnInit(): void {
    this.getAllTestimonials();
  }
  getAllTestimonials(): void {
    this.testimonialsService.getAll().subscribe((data) => {
      this.testimonials = data;
    });
  }

}
