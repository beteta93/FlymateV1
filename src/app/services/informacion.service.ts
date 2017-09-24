import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada = false;
  cargadaOfertas = false;
  ofertas: any[] = [];
  cargando = true;


  constructor(public http: Http) {

      this.carga_info();

    }

    public carga_info() {

      this.http.get('assets/data/info.pagina.json')
        .subscribe( data =>  {
          console.log(data.json());
          this.cargada = true;
          this.info = data.json();
        });
    }



}
