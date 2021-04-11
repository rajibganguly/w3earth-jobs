import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsdetailsPage } from './jobsdetails.page';

const routes: Routes = [
  {
    path: '', component: JobsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsdetailsPageRoutingModule {}
