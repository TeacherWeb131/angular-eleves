import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';

@NgModule({
  declarations: [AppComponent, ElevesComponent, EleveDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
