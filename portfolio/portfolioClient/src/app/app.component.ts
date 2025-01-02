import { Component } from "@angular/core";
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
     
@Component({
    selector: "my-app",
    imports: [HeaderComponent, HomeComponent, FooterComponent],
    templateUrl: './app.component.html',
})
export class AppComponent { 
    
}