import { Component, OnInit } from '@angular/core';
import { GitsearchServicesService } from '../service/gitsearch-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private_services:GitsearchServicesService) { }

  ngOnInit(): void {
  }
}
