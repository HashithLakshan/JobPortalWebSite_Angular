import { Component, OnInit } from '@angular/core';
import { PhotographerService } from 'src/app/service/coustomer/photographer.service';

@Component({
  selector: 'app-photographer-details',
  templateUrl: './photographer-details.component.html',
  styleUrls: ['./photographer-details.component.css']
})
export class PhotographerDetailsComponent implements OnInit {
  Phtographer:any[]=[];

  photographerID:String|null=null;
  photographerFirstName:String|null=null;
  photohrapherLastName:String|null=null;
  photographerUserName:String|null=null;
  phographerPassword:String|null=null;
  photographerNIC:String|null=null;
  photographerEmail:String|null=null;
  photogapherContactNumber:String|null=null;
  photographerGender:String|null=null;
  photographerAddress:String|null=null;
  photographerStatus:String|null=null;

  ngOnInit(): void {
    this.fetchPhotographer();
   // this.testview(x);
    console.log(this.photographerID); 
  }
  constructor(private photographerService:PhotographerService){}

 fetchPhotographer():void{
  this.photographerService.getAllPhotographers().subscribe(
    (response)=>{
      this.Phtographer=response.payload[0];
    }
  )
 }
 testview(x:any){
  this.photographerID =x.photographerID;
  this.photographerUserName =x.photographerUserName;
  this.photographerFirstName =x.photographerFirstName;
  this.photohrapherLastName =x.photohrapherLastName;
  this.photographerAddress =x.photographerAddress;
  this.photogapherContactNumber=x.photogapherContactNumber;
  this.photographerEmail =x.photographerEmail;
  this.photographerNIC =x.photographerNIC;
  this.photographerGender =x.photographerGender;
  this.photographerStatus =x.photographerStatus;



   
 }
 onDelete(){
  this.photographerService.deletePhotographer(this.photographerID).subscribe(
    data=>{

    }
  )
}


}


