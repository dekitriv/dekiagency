import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private featuresService: FeaturesService) {}
  public features: any[] | undefined;
  ngOnInit(): void {
    this.getAllFeatures();
  }
  getAllFeatures(): void {
    this.featuresService.getAll().subscribe((data) => {
      this.features = data;
    });
  }
}
