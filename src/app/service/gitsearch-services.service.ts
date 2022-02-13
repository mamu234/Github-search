import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchServicesService {
  _http: any;

  constructor(private_http:HttpClient)   { }
   gitsearchUrl = "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"
  Navbar():observable<any>
{
return this._http.get(this.gitsearchUrl)
}
}