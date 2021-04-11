import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-jobsdetails',
  templateUrl: './jobsdetails.page.html',
  styleUrls: ['./jobsdetails.page.scss'],
})
export class JobsdetailsPage implements OnInit {
  ids: number;
  items: object;
  allAboutProduct: object;
  callNumber: number;
  resolvedItems: any;
  article: any;

  workfileA: string;
  workfileB: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ids = +params.get('id');
      this.loadData();
    })
  }


  public loadData() {
    this.resolvedItems;
    this.http.get(`https://jobs-a4758-default-rtdb.firebaseio.com/.json`).subscribe((res) => {
      this.resolvedItems = res;
      this.filterDataBasedOnId(this.ids);
    });

  }

// Filter each data
  private filterDataBasedOnId(ode) {
    if (this.resolvedItems.length > 0) {
      console.log(typeof (this.resolvedItems));
      for (let i = 0; i < this.resolvedItems.length; i++) {
        if (this.resolvedItems[i]['id'] == ode) {
          this.callNumber = this.resolvedItems[i]['call'];
          this.allAboutProduct = this.resolvedItems[i];
          this.items = this.resolvedItems[i]['htmldatas'];
          this.article = this.items['article'];
          this.workfileA = this.resolvedItems[i]['workfile_a'];
          this.workfileB = this.resolvedItems[i]['workfile_b'];
          this.image1 = this.resolvedItems[i].image1;
          this.image2 = this.resolvedItems[i].image2;
          this.image3 = this.resolvedItems[i].image3;
          this.image4 = this.resolvedItems[i].image4;
          console.log(this.items);
        }
      }

      return this.items, this.article;
    }
  }

  // Call direct
  public gotoCall(phonenumber) {
    var call = "tel:+" + phonenumber;
    document.location.href = call;
  }

}
