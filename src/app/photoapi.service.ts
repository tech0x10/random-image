import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PhotoapiService {

  constructor(private api:HttpClient) { }

getthatphoto(){
  return this.api.get('https://api.unsplash.com/photos/random',{
  headers:{
    Authorization:'Client-ID jDQlT_hpMK2NdvDLWq4ERcdD-hNYM4IRsdpX38vmO4g'  
  }
  })
}
}
