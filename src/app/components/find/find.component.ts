import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: []
})
export class FindComponent implements OnInit  {

    myForm: FormGroup;
    constructor(private formBuilder: FormBuilder) { }
    public radioModelIda: string = 'ida1';
    public radioModelVuelta: string = 'vuelta1';
  
  
    public checkModelIda:any = {ida1: false, ida2: true};
    public checkModelVuelta:any = {vuelta1: false, vuelta2: true};

    ngOnInit() {
      this.myForm = this.formBuilder.group({
        date: null,
        range: null,
        left: false,
        ida1: true,
        ida2: false,
        vuelta1: true,
        vuelta2: false
      });
    }

}
