import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { RouterOutlet} from "@angular/router";
     
@Component({
    selector: "my-app",
    imports: [RouterOutlet],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    
}