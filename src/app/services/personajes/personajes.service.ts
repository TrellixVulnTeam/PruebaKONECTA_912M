import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})

export class PersonajesService {
  API_URI = keys.api.API_URI
  constructor(private http:HttpClient) { }


  CargarPersonajes(){
    return this.http.get(`${this.API_URI}/character/`)
  }
  CargarCapitulos(){
    return this.http.get(`${this.API_URI}/episode/`)
  }

  cargarInfo(url:any){
    return this.http.get(url)
  }


}
