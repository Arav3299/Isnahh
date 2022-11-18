import { CommonServiceService } from 'src/app/service/common.service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  fromOne:any; 

  constructor(private service:CommonServiceService) {
    
   }

  ngOnInit(): void {
    this.service.data$.subscribe(res => this.fromOne = res);
    if(this.fromOne.length>0){
    localStorage.setItem("ar",JSON.stringify(this.fromOne));
    }else{
      // alert()
      if(localStorage.getItem("ar")!=null && localStorage.getItem("ar") ){
        // alert("inside") 
        this.fromOne=JSON.parse(localStorage.getItem("ar") || '[]');
        // alert(this.fromOne)
      }
    }
    
  }

}
