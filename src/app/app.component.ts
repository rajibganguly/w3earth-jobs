import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/', icon: 'compass'},
    { title: 'Skilled Jobs', url: '/jobs', icon: 'briefcase' },
    { title: 'Share', url: '/share', icon: 'rocket' },
    { title: 'Contact', url: '/contact', icon: 'cafe' }
    
  ];
  public labels = ['Skilled Foreign Jobs'];
  constructor() {}
}
