import { Component, OnInit } from '@angular/core';
import { GitsearchService } from 'src/app/gitsearch.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  


  repo: any;
  repoName:string= "caroline";

  constructor(private gitsearchService: GitsearchService) { 
    
  }

  getUserRepo () {
    this.gitsearchService.getUserRepos().subscribe(repo => {
      console.log(repo);
      this.repo = repo;
    });
 
  }

  ngOnInit() {
    this.getUserRepo()
  }

}
