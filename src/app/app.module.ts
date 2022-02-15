import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { HomePageModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from './components/pagination/pagination.module';
import { PokemonModule } from './components/pokemon-list/pokemon-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
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
