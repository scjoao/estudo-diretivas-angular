import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent {

  estilo: string = "disable";

  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable";
    }else{
      this.estilo = "disable";
    }
  }

}
