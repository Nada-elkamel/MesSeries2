import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import {SerieService} from '../services/serie.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styles: [
  ]
})
export class ListeTypesComponent implements OnInit {
  types!: Type[];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
  /*   /* this.serieService.listeTypes().
       subscribe(typs => {this.types = typs._embedded.types;
       console.log(typs); 
}); */
  }

}
