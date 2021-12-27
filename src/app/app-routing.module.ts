import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthorComponent } from './components/author/author.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    component:HomeComponent,
    data: { animation: 'Home Page' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'About Page' }
  },
  {
    path:'news',
    component: NewsComponent,
    data: { animation: 'News Page' }
  },
  {
    path:'contact',
    component:ContactComponent,
    data: { animation: 'Contact Page' }
  },
  {
    path:'author',
    component: AuthorComponent,
    data: { animation: 'Author Page' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
