import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../tour.service';
import { TourInterface } from '../tour-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  city:string;

  tourList:TourInterface;
  response:string;
  constructor( private service:TourService) { }

  ngOnInit() {
  }

  onChange(val){
    this.response = val;
  }

  search(){
    console.log(this.city);
    
    this.service.findAll(this.city).subscribe(
      response => {console.log(response);
        this.tourList = response;
      }
    )
  }
}
