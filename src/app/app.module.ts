import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthorComponent } from './components/author/author.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { WhyusComponent } from './components/home/whyus/whyus.component';
import { PricingComponent } from './components/home/pricing/pricing.component';
import { PartnersComponent } from './components/home/partners/partners.component';
import { InfoComponent } from './components/about/info/info.component';
import { CommerciaComponent } from './components/about/commercia/commercia.component';
import { TestimonialsComponent } from './components/about/testimonials/testimonials.component';
import { InfoContactComponent } from './components/contact/info-contact/info-contact.component';
import { FormComponent } from './components/contact/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutHomeDivComponent } from './components/home/about-home-div/about-home-div.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextCutPipe } from './pipes/text-cut.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    AuthorComponent,
    HeaderComponent,
    FeaturesComponent,
    WhyusComponent,
    PricingComponent,
    PartnersComponent,
    InfoComponent,
    CommerciaComponent,
    TestimonialsComponent,
    InfoContactComponent,
    FormComponent,
    AboutHomeDivComponent,
    TextCutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
