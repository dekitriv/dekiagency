import { Component, OnInit } from '@angular/core';
import { INav } from 'src/app/interfaces/i-nav';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private navService: NavService) {}

  public nav: INav[] = [];
  ngOnInit(): void {
    this.getAllNavs();
  }
  getAllNavs(): void {
    this.navService.getAll().subscribe((data) => {
      this.nav = data;
    });
  }
}
