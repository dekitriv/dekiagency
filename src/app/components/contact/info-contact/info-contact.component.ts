import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contact-info.service';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.css'],
})
export class InfoContactComponent implements OnInit {
  constructor(private contactInfoService: ContactInfoService) {}
  public contactInfo: any[] | undefined;
  ngOnInit(): void {
    this.getAllContactInfo();
  }
  getAllContactInfo(): void {
    this.contactInfoService.getAll().subscribe((data) => {
      this.contactInfo = data;
    });
  }
}
