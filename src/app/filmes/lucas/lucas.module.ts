import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucasPageRoutingModule } from './lucas-routing.module';

import { LucasPage } from './lucas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucasPageRoutingModule
  ],
  declarations: [LucasPage]
})
export class LucasPageModule {}
