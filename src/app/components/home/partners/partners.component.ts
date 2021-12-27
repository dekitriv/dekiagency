import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/services/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private partnersService: PartnersService) {}
  public partners: any[] | undefined;
  ngOnInit(): void {
    this.getAllPartners();
  }
  getAllPartners(): void {
    this.partnersService.getAll().subscribe((data) => {
      this.partners = data;
    });
  }
}
