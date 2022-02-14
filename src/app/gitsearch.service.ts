import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
  private username!:string;
  private clientid!:'bf7cf7a28bdc1832464c';
  private clientsecret !: '3280353abbd08eecfffdbb6f85bc375df497b98b'

  constructor(private http:HttpClient) { 

    console.log('service is now ready')
    this.username = 'mamu234'
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users" + this.username + '?client_id' + this.clientid + '&client_secret' + this.clientsecret)
    .pipe(map((response: any) => response.json()));
  }
}
