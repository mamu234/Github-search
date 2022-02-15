import { Component, OnInit } from '@angular/core';
import { GitsearchService } from  'src/app/gitsearch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  user: any;
  userRepos:any;
  username: string = 'njoroge33'
  imageWidth: number = 150;
  imageHeight: number = 200;

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