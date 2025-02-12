import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
 
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { WebflowComponent } from "./Webflow/webflow.component";
import { TranslateComponent } from "./Webflow/translate/translate.component";
 
// определение маршрутов
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "portfolio", component: PortfolioComponent},
    { path: "webflow", component: WebflowComponent, children: [{
        path: "translate", component: TranslateComponent
      }]
    },    
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};