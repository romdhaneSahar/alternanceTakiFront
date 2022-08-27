import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storageApp';

//selectedFile:File;


  //private path ='assets/svg/FileStructure.svg'

constructor(private http :HttpClient,
  private MatIconRegistry: MatIconRegistry,
  private domSanitizer : DomSanitizer )
  {
    //this.MatIconRegistry.addSvgIcon('FileStructure',this.domSanitizer.bypassSecurityTrustUrl('../assets/svg/FileStructure.svg')
    this.MatIconRegistry.addSvgIcon('Star',this.setPath('assets/svg/Star.svg')
    );
    this.MatIconRegistry.addSvgIcon('HomeMinimal',this.setPath('assets/svg/HomeMinimal')
    );

    this.MatIconRegistry.addSvgIcon('FileStructure',this.setPath('assets/svg/FileStructure.svg')
  );

  this.MatIconRegistry.addSvgIcon('logo',this.setPath('assets/svg/logo.svg')
  );

  this.MatIconRegistry.addSvgIcon('File',this.setPath('assets/svg/File.svg')
  );
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

/*
  onFileSelected(event:any){
    this.selectedFile = <File> event.target.files[0];
  }

  onUpload(){
    const filedata = new FormData();
    filedata.append('image',this.selectedFile,this.selectedFile.name)
  
  this.http.post('http://localhoast:.../api/values',filedata)
  .subscribe(res=>{
    console.log(res);
  }
  )
  }*/
}




