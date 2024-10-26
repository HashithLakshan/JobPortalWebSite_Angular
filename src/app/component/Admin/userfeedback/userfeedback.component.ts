import { Component, OnInit } from '@angular/core';
import { UserFeedbacksService } from 'src/app/service/coustomer/user-feedbacks.service';
import { UserFeedbacks } from 'src/app/shared/userFeedbacks';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css']
})
export class UserfeedbackComponent implements OnInit{
 
  feedbacksUsers :any [] = [];

  userfeedbacks : UserFeedbacks = {
userFeedbackID :'',
userDiscription:'',
userSubject:'',
replingThisUser:'',
commonStatus:'',
userDto:{
  userID: '',
  userFirstName:'',
    userLstName:'',
    gender:'',
    userContactNumber:'',
    userName:'',
    userEmail:'',
    commonStatus:'',
    userProfileImgUrl:'',
}
  };

  constructor(private userFeedbacksService : UserFeedbacksService){}
  ngOnInit(): void {
   this.getAllUserFeedbacks();
  }

  getAllUserFeedbacks(): void {
    this.userFeedbacksService.getAllUserFeedbacks().subscribe(
      (response) => {
        this.feedbacksUsers=response.payload[0];
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  
  

}
