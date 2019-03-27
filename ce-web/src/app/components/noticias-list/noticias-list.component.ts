import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DataStorageService } from 'src/app/services/data/data-storage.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {

  constructor(public DataStorage: DataStorageService ) {}
   NoticiasMostrar;
   bandera;
 
  ngOnInit() {

    this.DataStorage.setObjectValue("Noticias", this.DataStorage.NoticiasList);
  
    if(this.DataStorage.getObjectValue("Noticias") != null)
    {
  
    this.NoticiasMostrar =  this.DataStorage.getObjectValue("Noticias");
    this.bandera = 0;
    }else{
      this.bandera = 1;
    }  
  }
 

  

 

}
