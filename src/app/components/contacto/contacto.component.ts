import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent {

  title = 'Flymate';
  lat = 37.4045;
  lng = -6.0055;
  zoom= 18;

  constructor() { }

}
