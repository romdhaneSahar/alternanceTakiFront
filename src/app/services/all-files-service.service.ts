import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllFilesServiceService {

  Apiurl ="http://localhost:5216/api"
  
  constructor(private Http:HttpClient) { }
  getAllFiles():Observable<any[]>{
    return this.Http.get<any[]>(this.Apiurl+'/file');
  }
}
