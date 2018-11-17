import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../user';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  public users:Array<any>;
  public userId:number;

  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getApiData('https://jsonplaceholder.typicode.com/users')
  .subscribe((response)=>{
   this.users=response;
  })
  }
  id(user){
    this.userId=user.id;
  }


}
