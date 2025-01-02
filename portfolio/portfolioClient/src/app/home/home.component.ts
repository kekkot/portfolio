import { Component } from '@angular/core';
import {ObsNavComponent} from './obs-nav/obs-nav.component';
import {JobeComponent} from './jobe/jobe.component';

@Component({
  selector: 'main',
  imports: [ObsNavComponent, JobeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
