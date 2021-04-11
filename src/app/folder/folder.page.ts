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
    
  }

  doRefresh(ev) {
  }

}
