import { Component, OnInit } from '@angular/core';
import { GitsearchService } from  'src/app/gitsearch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  user: any;
  repos:any;
  username: string = 'mamu234'
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private gitsearchService: GitsearchService) { 
    
  }

  getUser () {
    this.gitsearchService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
 
    this.gitsearchService.getUserInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

  }

  ngOnInit() {
    this.getUser()
  }

}