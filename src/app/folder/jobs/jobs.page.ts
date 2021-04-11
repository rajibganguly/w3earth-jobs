import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  items: any;
  callnumber = 918806688030;
  page = 0;
  maximumPage = 3;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cd: ChangeDetectorRef    
    ) {
      
     }

  ngOnInit() {
    this.loadData();
  }

  loadData(event?) {
    this.http.get(`https://jobs-a4758-default-rtdb.firebaseio.com/.json`).subscribe((res) => {
      this.items = res;

      if(event) {
        event.target.complete();
      }
    })

  }

  loadMore(event) {
    this.page++;
    this.loadData(event);

    if(this.page === this.maximumPage) {
      event.target.disabled = true;
    }
  }

  goToDetails(obj) {
    this.router.navigate(['jobs/' + obj.id]);
    this.cd.detectChanges();
  }

 

}
