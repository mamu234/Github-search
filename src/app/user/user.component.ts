import { Component, OnInit } from '@angular/core';
import { GitsearchService } from  'src/app/gitsearch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  user: any;

  username: string = '';
  imageWidth: number = 300;
  imageHeight: number = 250;

  constructor(private gitsearchService: GitsearchService) { 
    
  }

  getUser () {
    this.gitsearchService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
 
 

  }

  ngOnInit() {
    this.getUser()
  }

}