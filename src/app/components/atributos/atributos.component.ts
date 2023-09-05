import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent {

  estilo: string = "disable";
  corFundo: string = "blue";
  corFonte: string = "white";
  item: string = "";
  lista: string[] = [];

  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable";
    }else{
      this.estilo = "disable";
    }
  }

  adicionarLista(){
    this.lista.push(this.item);
  }

}
