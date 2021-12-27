import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) {}
  public news: any[] | undefined;
  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews(): void {
    this.newsService.getAll().subscribe((data) => {
      this.news = data;
    });
  }

}
