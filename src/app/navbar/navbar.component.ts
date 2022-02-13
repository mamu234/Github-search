import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { GitsearchServicesService } from '../service/gitsearch-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private _services: any;

  constructor(private_services:GitsearchServicesService) { }

  ngOnInit(): void {
    this._services.navbar().subscribe((result: any) => {
      console.log(result)
    })
  }
}
