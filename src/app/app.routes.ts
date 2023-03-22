import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ClothesComponent } from "./components/clothes/clothes.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'clothes', component: ClothesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminDashboardComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
]