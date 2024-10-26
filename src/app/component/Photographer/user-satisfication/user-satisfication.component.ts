import { Component } from '@angular/core';
import { PhotographerFeedbacksService } from 'src/app/service/photographer-feedbacks.service';
import { PhotographerToUserFeedbacksService } from 'src/app/service/photographer-to-user-feedbacks.service';
import { PhotographerToUserFeedbacks } from 'src/app/shared/userToPhotographerFeedbacks';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-satisfication',
  templateUrl: './user-satisfication.component.html',
  styleUrls: ['./user-satisfication.component.css']
})
export class UserSatisficationComponent {

  userToPhotographerFeedback : PhotographerToUserFeedbacks = {
    userDto:{
    userFirstName:'',
    userLstName: '',
    userProfileImgUrl:''
    },
    utoPDiscription:'',
    utoPFeedbackID:'',
    utoPSubject:'',
  };

  feedbackDetailsSatisfied : PhotographerToUserFeedbacks [] =[];
  userSatisfyDto :any []=[];
userInput?:String;
userValue?:String;
    constructor(private photographerToUserFeedbacksService : PhotographerToUserFeedbacksService){
    this.getStaisfiedFeedbacksAll();
  }

  onViewBtn(userToPhotographerFeedback: PhotographerToUserFeedbacks, index: number){
    this.userToPhotographerFeedback = userToPhotographerFeedback;
  }

  getStaisfiedFeedbacksAll(){
    let PhotographerID = sessionStorage.getItem('photographerID');
    console.log(PhotographerID)

    this.photographerToUserFeedbacksService.getAllByFeedbackSatisfied(PhotographerID).subscribe(
      (response)=>{
        console.log(response.payload[0])

      this.feedbackDetailsSatisfied = response.payload[0];
console.log(this.feedbackDetailsSatisfied)
      for(let x=0; x<this.feedbackDetailsSatisfied.length; x++){
        this.feedbackDetailsSatisfied[x];

      }

}

    );
  }

onSearch(){
  let PhotographerID = sessionStorage.getItem('photographerID');
  if(this.userInput === null || this.userInput === ''){
    Swal.fire('','Your Search Field is Empty','info');
  }else{
    switch(this.userValue){
case "UserName" :
  console.log(this.userInput)
  console.log(this.userValue)
this.photographerToUserFeedbacksService.getByfeedbackSatisfiedUserName(this.userInput,PhotographerID).subscribe(
  (respons)=>{
    if(respons.status === true){
      if (respons && respons.payload && respons.payload.length > 0) {
    this.feedbackDetailsSatisfied = respons.payload[0];
    for(let x= 0;x<this.feedbackDetailsSatisfied.length;x++){
     this.userSatisfyDto.push(this.feedbackDetailsSatisfied[x].userDto);
    }
  }else {
    Swal.fire('', 'No feedback found for this user Name.', 'warning');
  }
  }else{
Swal.fire('',respons.commonMessage,'error');
  }
  }
);
break;
case "UserID" :
this.photographerToUserFeedbacksService.getByfeedbackSatisfiedUserID(this.userInput,PhotographerID).subscribe(
  (response)=>{
    if(response.status === true){
      if(response && response.payload && response.payload.length>0){
        this.feedbackDetailsSatisfied = response.payload[0];
        for(let x = 0;x<this.feedbackDetailsSatisfied.length;x++){
          this.userSatisfyDto.push(this.feedbackDetailsSatisfied[x].userDto);

        }
      }else{
        Swal.fire('', 'No feedback found for this user ID.', 'warning');
      }
    }else{
      Swal.fire('',response.commonMessage,'error');
    }
  }
);
break;
default :{
  Swal.fire('','Select The Search Type','info')
}
    }
  }
}

onDelete(){
  if(this.userToPhotographerFeedback.utoPFeedbackID === null || this.userToPhotographerFeedback.utoPFeedbackID === ''){
    Swal.fire('','selete the Delition Feedback','info');
  }else{
  this.photographerToUserFeedbacksService.deleteBooking(this.userToPhotographerFeedback.utoPFeedbackID).subscribe(
  (repnse)=>{
if(repnse.status === true){
  Swal.fire('',repnse.commonMessage,'success');
}else{
  Swal.fire('',repnse.commonMessage,'error')
}
}
  )
}
}

onDeleteTableItem(x : any){
  this.photographerToUserFeedbacksService.deleteBooking(x).subscribe(
    (repnse)=>{
  if(repnse.status === true){
    Swal.fire('',repnse.commonMessage,'success');
  }else{
    Swal.fire('',repnse.commonMessage,'error')
  }
  }
    )
}

}
