import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common.service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private navi:Router,private service : CommonServiceService) { }
  
  @Input() arrr:any;
  
  array=[1,2,3,4];

  abc=this.array;

  @Output() emitVariable = new EventEmitter<any>();

  ngOnInit(): void {

    // alert(this.array)
    if(this.arrr){
      this.abc=this.arrr
    }
  }

  

  toSend(){
    // alert("call")
    this.service.data.next(this.array);
    this.navi.navigate(['second']);
  }

}
