import { Component} from '@angular/core';
import {InformacionService} from "../../services/informacion.service";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styles: []
})
export class SubscribeComponent  {

    constructor( public _is:InformacionService){} 


}
