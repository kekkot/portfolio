import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
 
import { HomeComponent } from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import { WebflowComponent } from "./Webflow/webflow.component";
 
// определение маршрутов
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "portfolio", component: PortfolioComponent},
    { path: "webflow", component: WebflowComponent}
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};