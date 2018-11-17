import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-child-detail',
  templateUrl: './view-child-detail.component.html',
  styleUrls: ['./view-child-detail.component.css']
})
export class ViewChildDetailComponent implements OnInit {
private childUserData:any;
  constructor(private apiService:ApiServiceService,private router:ActivatedRoute) { }
  @Input() id:number;
  ngOnInit() {

//     this.router.params.subscribe((params)=>{
// console.log(params);
// if(params){
//   this.getData(params.id);
// }
//     });
  }
  ngAfterViewChecked(){
if(this.id){
  this.getData(this.id);
  this.id=null;
}
  }
getData(id){
this.apiService.getChildData(id)
.subscribe((res)=>{
this.childUserData=res;
console.log('Detailapi call',res);
})
}
}
