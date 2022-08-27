import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllFiles } from 'src/app/models/all-files';
import { AllFilesServiceService } from 'src/app/services/all-files-service.service';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {
allFiles : AllFiles[]=[];
  constructor(private AllFilesService :AllFilesServiceService,private router:Router) { }

  ngOnInit(): void {
    this.refreshList();
  }
 
  refreshList(){
    this.AllFilesService.getAllFiles().subscribe(data =>{
      this.allFiles=data;
    } );
    
     }
 
  

}
