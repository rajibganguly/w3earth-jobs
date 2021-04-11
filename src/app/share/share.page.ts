import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  url;
  phoneNumber: number;
  country = 91;
  showsShare = false;
  link = 'https://play.google.com/store/apps/details?id=io.w3earthjobs.starter';



  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {
  }

  


  // shareNow() {
  //   this.url = `https://api.whatsapp.com/send?text=${this.link}`;
  // }

  

  // addNumberTo(w) {
  //   let number = w.target.value;
  //   if (!isNaN(number)) {
  //     this.showsShare = true;
  //     this.phoneNumber = number;
  //     // if (number.length >= 9) {
  //     //   this.showsShare = true;
  //     //   this.phoneNumber = number;
  //     // } else {
  //     //   this.showsShare = false;
  //     // }
  //   } else {
  //     this.showsShare = false;
  //   }
  // }

 

  

}
