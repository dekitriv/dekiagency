import { Component, OnInit } from '@angular/core';
import { IContactInfo } from 'src/app/interfaces/i-contactInfo';
import { INav } from 'src/app/interfaces/i-nav';
import { ISocials } from 'src/app/interfaces/i-socials';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { NavService } from 'src/app/services/nav.service';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private navService: NavService,
    private socialsService: SocialsService,
    private contactInfoService: ContactInfoService
  ) {}

  public nav: INav[] = [];
  public socials: ISocials[] = [];
  public contactInfo: IContactInfo[] = [];

  ngOnInit(): void {
    this.getAllNavs();
    this.getAllSocials();
    this.getAllContactInfo();
  }
  getAllNavs(): void {
    this.navService.getAll().subscribe((data) => {
      this.nav = data;
    });
  }
  getAllSocials(): void {
    this.socialsService.getAll().subscribe((data) => {
      this.socials = data;
    });
  }
  getAllContactInfo():void{
    this.contactInfoService.getAll().subscribe((data)=>{
      this.contactInfo = data
    })
  }
}
