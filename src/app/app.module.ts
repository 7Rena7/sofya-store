import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

// Routes
import { routes } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ClothesCardComponent } from './components/clothes-card/clothes-card.component';
import { LoginComponent } from './components/login/login.component';
import { ClotheComponent } from './components/clothe/clothe.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClothesComponent,
    AboutComponent,
    FooterComponent,
    ClothesCardComponent,
    LoginComponent,
    ClotheComponent,
    NoimagePipe,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: 'dev-41o7dka7h1qzw8ak.us.auth0.com',
      clientId: '5UKAzdOEuNRLvhnWjtjzdkkcvhY7iufN',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/home`
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
