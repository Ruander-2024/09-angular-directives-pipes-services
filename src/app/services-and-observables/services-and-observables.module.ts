import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaComponent } from './components/alpha/alpha.component';
import { BetaComponent } from './components/beta/beta.component';
import { GammaComponent } from './components/gamma/gamma.component';



@NgModule({
  declarations: [
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlphaComponent, 
    BetaComponent, 
    GammaComponent
  ]
})
export class ServicesAndObservablesModule { }
