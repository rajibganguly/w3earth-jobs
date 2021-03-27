import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  items = [];

  constructor() { 
    this.items = [
      {
        img: './../../assets/img/banner.png'
      }
    ]
  }

  ngOnInit() {
  }

  unread(item) {
    // console.log(item)
  }

  

}
