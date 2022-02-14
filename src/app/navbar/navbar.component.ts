import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private _services: any;

  constructor() { }

  navbarDisplay: any = [];

  ngOnInit(): void {
    this._services.navbar().subscribe((result: any) => {
      console.log(result)
      this.navbarDisplay = result.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
    })
  }
}
