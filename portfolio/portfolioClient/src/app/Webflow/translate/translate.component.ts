import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
    selector: "translate",
    imports: [CommonModule],
    templateUrl: './translate.component.html',
    styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
    str;
    async getCollections(): Promise<void> {
        const response = await fetch("http://localhost:32771/getWebflowCollection");

        /*const list = document.createElement("ul");
        response.json().then(data => {
            for (let item of data.item) {                
                const listItem = document.createElement("li");
                listItem.appendChild(document.createElement("strong")).textContent = item.fieldData.name;
                list.appendChild(listItem);
            }
        });*/
        this.str = await response.json();
    }
}