import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "webflow",
    imports: [RouterOutlet, RouterLink],
    templateUrl: './webflow.component.html',
    styleUrls: ['./webflow.component.css']
})
export class WebflowComponent { 
    
}