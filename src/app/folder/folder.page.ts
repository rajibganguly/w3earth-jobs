import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  countries;
  agents;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.countries = [
      { country: 'Australia', views: 155, color: 'light'},
      { country: 'Middle East', views: 24, color: 'light'},
      { country: 'Europe', views: 11, color: 'light'},
      { country: 'Africa', views: 2, color: 'light'}
    ];

    this.agents = [
      { agentname: 'Agent D', likes: 40, color: 'danger'},
      { agentname: 'UAE Helper', likes: 1, color: 'danger'},
      { agentname: 'Max Res', likes: 14, color: 'danger'},
      { agentname: 'Jobs Seems', likes: 22, color: 'danger'}
    ]
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  doRefresh(ev) {
  }

}
