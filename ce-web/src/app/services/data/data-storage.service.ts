import { Injectable } from '@angular/core';
import ListNoticia from '../../../assets/json/noticias.json';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }
  NoticiasList: Noticia[] = ListNoticia; 

  setObjectValue= (key:string, objectValue:any)=>{
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(objectValue)); 
    }else{
      throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
    }
  }
    getObjectValue= (key:string)=>{
      if (window.localStorage) {
        const DATA= JSON.parse(localStorage.getItem(key));
        if (DATA) {
          return DATA;
        }else{
          //throw new Error('No se encontró el valor ${key} en el localStorage');
          return null;
                     
        }
      }else{
        throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
      }
    }


}
