import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { TagCreateModalComponent } from './tag-create-modal/tag-create-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LandingComponent,
    LoginComponent,
    TagsComponent,
    TagCreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ZXingScannerModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
