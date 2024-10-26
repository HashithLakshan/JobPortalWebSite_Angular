import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserFeedbacksService } from 'src/app/service/coustomer/user-feedbacks.service';
import { UserFeedbacks } from 'src/app/shared/userFeedbacks';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent {


  userFeedbacks: UserFeedbacks = {
  
    commonStatus:'ACTIVE',
    replingThisUser:'',
    userDiscription:'',
    userFeedbackID:'',
  
    userDto:{
        userID:''
    }
  };

  reEnterPassword?:string;

  constructor(private userFeedbacksService: UserFeedbacksService,private router:Router){}

  onSubmit():void{
    console.log('im here!!!');
    console.log(this.userFeedbacks);
    console.log(this.reEnterPassword);

    let user = sessionStorage.getItem('userID');
  
    if (user) {
    this.userFeedbacks.userDto = this.userFeedbacks.userDto || {};
    this.userFeedbacks.userDto.userID = user;
    this.userFeedbacksService.saveUserFeedbacks(this.userFeedbacks).subscribe(
      (response)=>{
if(response.status === true){
  Swal.fire ('',response.commonMessage,'success')
}else{

  for(let i = 0;i<response.errorMessages.length;i++){
    console.log(response.errorMessages)
  Swal.fire ('',response.errorMessages[i],'question')
  }
}

      }
      
    )

}
  }
}