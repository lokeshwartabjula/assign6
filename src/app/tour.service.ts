import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TourInterface } from './tour-interface';




@Injectable({
  providedIn: 'root'
})
export class TourService {
 
  url:string;

  
  city:string;
  constructor(private http:HttpClient) {
    
   }

  findAll(city):Observable<TourInterface>
 {
  console.log(city);
   
   this.url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2d3a09ac0327183aa221e1721d628a0c"
   return this.http.get<TourInterface>(this.url);
  }
  functon(cityName){
    this.city=cityName;
  }
}
