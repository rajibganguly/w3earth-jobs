import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'jobs/:id',
    loadChildren: () => import('./../jobsdetails/jobsdetails.module').then( m => m.JobsdetailsPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./../share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
