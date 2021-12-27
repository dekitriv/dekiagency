import { Component, OnInit } from '@angular/core';
import { PricingService } from 'src/app/services/pricing.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  constructor(private pricingService: PricingService) {}
  public pricing: any[] | undefined;
  public state = 'nonHover';
  ngOnInit(): void {
    this.getAllPricing();
  }
  getAllPricing(): void {
    this.pricingService.getAll().subscribe((data) => {
      this.pricing = data;
    });
  }
}
