import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walkingtree';
  traineesdetails=[{name:'Anjali', role:"Trainee"}, {name:"richa", role:"trainee"}]
  trainees = ['harshit', 'amar']
}
