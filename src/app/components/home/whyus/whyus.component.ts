import { Component, OnInit } from '@angular/core';
import { WhyUsService } from 'src/app/services/why-us.service';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor(private whyUsService: WhyUsService) {}
  public whyUs: any[] | undefined;
  ngOnInit(): void {
    this.getAllWhyUs();
  }
  getAllWhyUs(): void {
    this.whyUsService.getAll().subscribe((data) => {
      this.whyUs = data;
    });
  }

}
