import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  produtos: string[] = [];
  menuType: string = "superuser";

  constructor(){
    this.produtos = [
      "Mouse",
      "Teclado",
      "Fonte"
    ]
  }

  adicionar(){
    this.produtos.push("Joãozin");
  }

  remover(index: number){
    alert(index);
    this.produtos.splice(index, 1);
  }

}
