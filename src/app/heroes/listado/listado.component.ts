import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  heroes:string[] = ['spiderman','ironman','hulk','thor','capitan america']
  heroesBorrados:string ='';
  /* heroesBorrados:string|undefined =''; */
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift();
    console.log('borrando...', heroeBorrado);

    this.heroesBorrados = heroeBorrado || '';
  }

}
