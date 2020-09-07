import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubnavComponent } from './subnav/subnav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AdBlocksComponent } from './ad-blocks/ad-blocks.component';
import { FeaturedCarouselComponent } from './featured-carousel/featured-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavComponent,
    BreadcrumbComponent,
    HeroBannerComponent,
    AdBlocksComponent,
    FeaturedCarouselComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
