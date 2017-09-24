import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Http } from '@angular/http';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: []
})



export class ResultsComponent {

  public isCollapsed: boolean = false;
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number = 0;
  public noWrapSlides: boolean = false;
  
  cargadaOfertas = false;
  ofertas: any[] = [];
  cargando = true;
  

  public constructor(public _is: InformacionService, public http: Http) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
    this.isCollapsed = true;
    this.carga_ofertas();
  }

  public addSlide(): void {
    this.slides.push({
      image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }



  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }

     public carga_ofertas() {

      this.http.get('https://flymate-v1.firebaseio.com/api.json')
        .subscribe( data =>  {
          console.log(data.json());
          setTimeout(()=>{
            this.cargando=false;
            this.cargadaOfertas = true;
            this.ofertas = data.json();

          }, 8000);

        });

    }


}
