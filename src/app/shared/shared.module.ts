import { NgModule } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [      
    NavbarComponent
  ],
    imports: [
       RouterModule
    ],
    exports: [NavbarComponent]
  })
  export class SharedModule { }