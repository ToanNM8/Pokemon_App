import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { HomePageModule } from './components/home-page/home-page.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonModule } from './components/pokemon/pokemon.module';
import { PaginationModule } from './components/pagination/pagination.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NavigationModule,
    HomePageModule,
    HttpClientModule,
    NgbModule,
    PokemonModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
