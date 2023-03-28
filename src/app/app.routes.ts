import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ClothesComponent } from "./components/clothes/clothes.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { ClotheComponent } from "./components/clothe/clothe.component";
import { AdminPanelComponent } from "./components/admin/admin-panel/admin-panel.component";
import { AuthGuard } from "@auth0/auth0-angular";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'clothes', component: ClothesComponent},
    {path: 'clothes/:id', component: ClotheComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'admin-panel', 
        component: AdminPanelComponent,
        canActivate: [AuthGuard]
    },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
]