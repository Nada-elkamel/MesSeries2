import { Injectable } from '@angular/core';
import { Serie } from '../model/serie.model';
import {Type} from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  series : Serie[]; //un tableau de Serie
  serie! : Serie;
  types : Type[];
  constructor() {
    
    this.types=[{idType:1,nomTy:"Drama"},
                {idType:2 , nomTy:"Aventure"}];

    this.series = [
      {idSerie : 1, nomSerie : "Duy Beni", dateCreation : new Date("10/08/2022"),langue:"Turc",type : {idType : 1, nomTy : "Drama"}},
      {idSerie : 2, nomSerie : "Emily in Paris", dateCreation : new Date("12/07/2021"),langue:"Anglais",type : {idType : 2, nomTy : "Aventure"}},
      {idSerie : 3, nomSerie :"Legend of the blue sea", dateCreation : new Date("02/20/2016"),langue:"Coréen",type : {idType : 1, nomTy : "Drama"}}
       ];
  }
  listeSeries():Serie[] {
    return this.series;
}
ajouterSerie( prod: Serie){
this.series.push(prod);
}
supprimerSerie( prod: Serie){
  //supprimer la serie ser du tableau series
  const index = this.series.indexOf(prod, 0);
  if (index > -1) {
  this.series.splice(index, 1);
  }
  //ou Bien
  /* this.series.forEach((cur, index) => {
  if(ser.idSerie === cur.idSerie) {
  this.series.splice(index, 1);
  }
  }); */
  }
  consulterSerie(id:number): Serie{
    this.serie = this.series.find(p => p.idSerie == id)!;
    return this.serie;
    }

    trierSeries(){
      this.series = this.series.sort((n1,n2) => {
      if (n1.idSerie! > n2.idSerie!) {
      return 1;
      }
      if (n1.idSerie! < n2.idSerie!) {
      return -1;
      }
      return 0;
      });
      }

    updateSerie(s:Serie)
{
// console.log(s);
this.supprimerSerie(s);
this.ajouterSerie(s);
this.trierSeries();
}
listeTypes():Type[] {
  return this.types;
  }
 
consulterType(id:number): Type{
    return this.types.find(type => type.idType == id)!;
    } 
    
}

