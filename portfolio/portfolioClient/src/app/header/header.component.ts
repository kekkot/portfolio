import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import {ButtonComponent} from '../elements/button/button.component';

@Component({
  selector: 'header',
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
}
