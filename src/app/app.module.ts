import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesAndPipesComponent } from './directives-and-pipes/directives-and-pipes.component';
import { ServicesAndObservablesModule } from './services-and-observables/services-and-observables.module';

@NgModule({
  declarations: [AppComponent, DirectivesAndPipesComponent],
  imports: [BrowserModule, ServicesAndObservablesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
