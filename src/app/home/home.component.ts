import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero_adivinar=5
  numero;
  mensaje=""
  constructor() { }
  adivinar(){
    if(this.numero==this.numero_adivinar){
      this.mensaje="Gano"
    }else if(this.numero<this.numero_adivinar){
      this.mensaje="Debes colocar un numero mayor"
    }else{
      this.mensaje="Debes colocar un numero menor"
    }
  }
  ngOnInit(): void {
  }

}
