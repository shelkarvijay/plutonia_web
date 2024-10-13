import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionsComponent } from './sections/sections.component';
import { ServicesComponent } from './sections/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DescriptionComponent } from './components/description/description.component';
import { PartnersComponent } from './components/partners/partners.component';
// import { NgImageSliderModule } from 'ng-image-slider';
import { OurWorkComponent } from './our-work/our-work.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SectionsComponent,
    ServicesComponent,
    ContactComponent,
    DescriptionComponent,
    PartnersComponent,
    OurWorkComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // NgImageSliderModule,
    FlexLayoutModule
  ],
  exports: [
    DescriptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
