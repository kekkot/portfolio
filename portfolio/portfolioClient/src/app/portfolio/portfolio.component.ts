import { Component } from '@angular/core';
import {ObsNavComponent} from './obs-nav/obs-nav.component';
import {JobeComponent} from './jobe/jobe.component';

@Component({
  selector: 'main',
  imports: [ObsNavComponent, JobeComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
}
