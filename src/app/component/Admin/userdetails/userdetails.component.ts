import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { UsersService } from 'src/app/service/coustomer/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:any[]=[];

  userID:String|null=null;
  userName:String|null=null;
  userFirstName:String|null=null;
  userLstName:String|null=null;
  gender:String|null=null;
  userEmail:String|null=null;
  userContactNumber:String|null=null;
  commonStatus:String|null=null;





  ngOnInit(): void {
    this.fetchUser();
   // this.testview(x);
    console.log(this.userID); 
  }
  constructor(private usersService:UsersService){}

 fetchUser():void{
  this.usersService.getAllUsers().subscribe(
    (response)=>{
      this.user=response.payload[0];
      console.log(this.user);
      
    }
  )
 }
 testview(x:any){
  this.userID =x.userID;
  this.userFirstName =x.userFirstName;
  this.userLstName =x.userLstName;
  this.userName =x.userName;
  this.userEmail =x.userEmail;
  this.userContactNumber =x.userContactNumber;
  this.gender =x.gender;
  this.commonStatus =x.commonStatus;
 }
 onDelete(){
  this.usersService.deleteUser(this.userID).subscribe(
    data=>{

    }
  )
}

}
