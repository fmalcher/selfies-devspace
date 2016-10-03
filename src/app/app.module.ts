import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelfieService } from './selfie.service';
import { ImageCardComponent } from './image-card/image-card.component';
import { SelfieGridComponent } from './selfie-grid/selfie-grid.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { SelfiesDevspaceRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    SelfieGridComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelfiesDevspaceRoutingModule
  ],
  providers: [SelfieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
