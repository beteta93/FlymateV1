import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SERVICIOS
import {InformacionService} from './services/informacion.service';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// RUTAS
import {app_routing} from './app.routes';

// COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { OffersComponent } from './components/offers/offers.component';
import { PlacesComponent } from './components/places/places.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';
import { FuncionamientoComponent } from './components/funcionamiento/funcionamiento.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FindComponent,
    OffersComponent,
    PlacesComponent,
    SubscribeComponent,
    AboutComponent,
    ResultsComponent,
    FuncionamientoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCahguh_RmHI-GfGgf0LpFNetMZXfjpziQ'
    }),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()


  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
