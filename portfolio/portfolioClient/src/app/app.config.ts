import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
 
import { HomeComponent } from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
 
// определение маршрутов
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "portfolio", component: PortfolioComponent},
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};