import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import {ButtonComponent} from '../elements/button/button.component';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'header',
  imports: [LogoComponent, ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
}
