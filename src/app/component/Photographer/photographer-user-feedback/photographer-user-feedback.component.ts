import { Component } from '@angular/core';
import { PhotographerToUserFeedbacksService } from 'src/app/service/photographer-to-user-feedbacks.service';
import { PhotographerToUserFeedbacks } from 'src/app/shared/userToPhotographerFeedbacks';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photographer-user-feedback',
  templateUrl: './photographer-user-feedback.component.html',
  styleUrls: ['./photographer-user-feedback.component.css']
})
export class PhotographerUserFeedbackComponent {
  photographerToUserFeedbacks :PhotographerToUserFeedbacks ={
    commonStatus:'',
    replingUserToPhotographer:'',
    photographerDto:{
        photographerID:''
    },
    userDto:{
        userID:'',
        commonStatus:'',
    gender:'',
    password:'',
    userContactNumber:'',
    userEmail:'',
    userFirstName:'',
    userLstName: '',
    userName: '',
    userProfileImgUrl:''
    },
    utoPDiscription:'',
    utoPFeedbackID:'',
    utoPSubject:'',

};
feedbackValue?:String;
searchValue?:String;
searchInput?:String;
feedabacksDetails : PhotographerToUserFeedbacks[]=[];
  userDetailsDto:any[]=[];
  feedback : any []=[];
  feedabacksDetails1 : PhotographerToUserFeedbacks[]=[];


constructor(private photographerToUserFeedbacksService: PhotographerToUserFeedbacksService) { 
  this.getAllBookings();
  this.getAllFeedbacks();
} // Inject CustomerServiceService



onSubmit():void{
  console.log('im here!!!');
  console.log(this.photographerToUserFeedbacks);

  this.photographerToUserFeedbacksService.saveFeedbacksUTP(this.photographerToUserFeedbacks).subscribe(
    (response)=>{
      console.log(response);
    }
  )
}


onViewBtn(photographerToUserFeedbacks: PhotographerToUserFeedbacks, index: number){
  this.photographerToUserFeedbacks = photographerToUserFeedbacks;
}


getAllBookings(){
  let PhotographerId = sessionStorage.getItem('photographerID')
  console.log('photographerID:: '+PhotographerId);
  
  this.photographerToUserFeedbacksService.getfeedbackPhotographerActiveUsers(PhotographerId).subscribe(
    (response)=>{
      console.log(response);
      console.log('response.payload[0].length:: '+response.payload[0].length);

      this.feedabacksDetails = response.payload[0]

      for(let x=0; x<this.feedabacksDetails.length; x++){
        this.userDetailsDto.push(this.feedabacksDetails[0].userDto)
      }
  
      
      console.log('this.bookingDetails::');
      console.log(this.feedabacksDetails);

      console.log('this.userDetailsDto::');
      console.log(this.userDetailsDto);
      
      
      
    }
  )
}

getAllFeedbacks(){
  let PhotographerId = sessionStorage.getItem('photographerID')
this.photographerToUserFeedbacksService.getByFeedbackPhotographerId(PhotographerId).subscribe(
  (response)=>{
  this.feedabacksDetails = response.payload[0]

      for(let x=0; x<this.feedabacksDetails.length; x++){
        this.feedabacksDetails[x]

      }
  },(error)=>{

  }
)

}

onSearch(){
  if (this.searchInput != null && this.searchInput != '') {
    console.log(this.searchValue)
    const PhotographerId = sessionStorage.getItem('photographerID');  // Get the photographer ID from sessionStorage
    
    if (PhotographerId) {
      switch (this.searchValue) {
        case "user":
          this.photographerToUserFeedbacksService.getByUserNameFeedback(this.searchInput, PhotographerId).subscribe(
            (response) => {
              if(response.status === true){

              if (response && response.payload && response.payload.length > 0) {
                this.feedabacksDetails = response.payload[0];
                for (let x = 0; x < this.feedabacksDetails.length; x++) {
                  this.userDetailsDto.push(this.feedabacksDetails[x].userDto);
                }

              
              } else {
                Swal.fire('', 'No feedback found for this user.', 'warning');
              }
            }else{
              Swal.fire('', response.commonMessage, 'warning');

            }
            },
            (error) => {
              console.error('Error fetching feedback by user name:', error);
              Swal.fire('', 'Error occurred while searching for user feedback.', 'error');
            }
          );
          break;
  
        case "ID":
          this.photographerToUserFeedbacksService.getByUserIDFeedback(this.searchInput, PhotographerId).subscribe(
            (response) => {
              if (response && response.payload && response.payload.length > 0) {
                this.feedabacksDetails = response.payload[0];
                console.log(response)

                for (let x = 0; x < this.feedabacksDetails.length; x++) {
                  this.userDetailsDto.push(this.feedabacksDetails[x].userDto);
                  console.log( this.userDetailsDto)
                }
                Swal.fire('', response.commonMessage, 'info');

              } else {
                Swal.fire('', 'No feedback found for this ID.', 'warning');
              }
            },
            (error) => {
              console.error('Error fetching feedback by user ID:', error);
              Swal.fire('', 'Error occurred while searching for ID feedback.', 'error');
            }
          );
          break;
  
        default:
          Swal.fire('', 'Invalid search value. Cannot search.', 'error');
          break;
      }
    } else {
      Swal.fire('', 'Photographer ID not found. Please log in again.', 'warning');
    }
  } else {
    Swal.fire('', 'Fill the empty field.', 'question');
  }
 
}  

onDropdownChange(event : any){
  const selectedValue = event.target.value;
  console.log(selectedValue)
  this.photographerToUserFeedbacksService.getByFeedbackId(selectedValue).subscribe(
    (response)=>{
      if (response && response.payload && response.payload.length > 0) {
        this.feedabacksDetails1 = response.payload;
        console.log(this.feedabacksDetails1)
        this.photographerToUserFeedbacks  = this.feedabacksDetails1[0];


        console.log(this.photographerToUserFeedbacks);
       
    }
  },(error)=>{
    Swal.fire('',error,'error');
  }
  
  );

}


onDelete(){
  console.log(this.photographerToUserFeedbacks.utoPFeedbackID)
if(this.photographerToUserFeedbacks.utoPFeedbackID === null || this.photographerToUserFeedbacks.utoPFeedbackID === ''){
  console.log(this.photographerToUserFeedbacks.utoPFeedbackID)

  Swal.fire ('','Please cheack the delition feedback','info')

  }else{
    this.photographerToUserFeedbacksService.deleteBooking(this.photographerToUserFeedbacks.utoPFeedbackID).subscribe(
      (response)=>{
        console.log(this.photographerToUserFeedbacks.utoPFeedbackID)
        if(response.status === true){
          Swal.fire ('',response.commonMessage,'success')
        }else{
          for(let x = 0;x<response.errorMessages.length;x++){
            Swal.fire('', response.errorMessages[x], 'question');
            }    
            }
      }
      )
  }
  
}


onDeleteTable(x : any){
  this.photographerToUserFeedbacksService.deleteBooking(x).subscribe(
    (response)=>{
      console.log(this.photographerToUserFeedbacks.utoPFeedbackID)
      if(response.status === true){
        Swal.fire ('',response.commonMessage,'success')
      }else{
        for(let x = 0;x<response.errorMessages.length;x++){
          Swal.fire('', response.errorMessages[x], 'question');
          }    
          }
    }
    )
}


}




