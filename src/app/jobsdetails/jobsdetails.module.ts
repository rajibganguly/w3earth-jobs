import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsdetailsPageRoutingModule } from './jobsdetails-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { JobsdetailsPage } from './jobsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    JobsdetailsPageRoutingModule
  ],
  declarations: [JobsdetailsPage]
})
export class JobsdetailsPageModule {}
