import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HobbitsesPage } from './hobbitses.page';

const routes: Routes = [
  {
    path: '',
    component: HobbitsesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HobbitsesPage]
})
export class HobbitsesPageModule {}
