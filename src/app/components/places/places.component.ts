import { Component} from '@angular/core';
import { InformacionService } from "../../services/informacion.service";


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styles: []
})
export class PlacesComponent  {

constructor(public _is:InformacionService){}

}
