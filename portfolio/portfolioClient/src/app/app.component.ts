import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { RouterOutlet} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
     
@Component({
    selector: "my-app",
    imports: [HeaderComponent, FooterComponent, RouterOutlet],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    
}