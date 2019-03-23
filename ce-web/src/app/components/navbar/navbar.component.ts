import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private DataStorage: DataStorageService) { }

  ngOnInit() {

    this.DataStorage.setObjectValue("hola", 1);
  }

}
