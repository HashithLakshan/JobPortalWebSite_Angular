import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PhotographerToUserFeedbacks } from 'src/app/shared/userToPhotographerFeedbacks';
import { PhotographerToUserFeedbacksService } from 'src/app/service/photographer-to-user-feedbacks.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/shared/user';
@Component({
  selector: 'app-phtogrpher-portfoliyo',
  templateUrl: './phtogrpher-portfoliyo.component.html',
  styleUrls: ['./phtogrpher-portfoliyo.component.css']
})
export class PhtogrpherPortfoliyoComponent implements OnInit {

photographerToUserFeedbacks : PhotographerToUserFeedbacks = {
  commonStatus: '',
    photographerDto:{
        photographerID:'5'
    },
    userDto:{
        userID:''
    },
    utoPDiscription:'',
    utoPFeedbackID:'',
    utoPSubject:''
};

  constructor(private router: Router, private photographerToUserFeedbacksService :PhotographerToUserFeedbacksService ) {

   }

  ngOnInit(): void {
  }

  GalleryNavigationButton() {
    this.router.navigate(['/gallery']); // This will navigate to the '/other-page' route
  }

  BookingPhotographerNavigate(){
    this.router.navigate(['/booking']);
  }
  onSubmit():void{
    console.log(this.photographerToUserFeedbacks);
    const PhotographerId = sessionStorage.getItem('photographerID');  // Get the logged-in username from sessionStorage

  let user =  sessionStorage.getItem('userID');
  let Photographer = sessionStorage.getItem('photographerID');
 
  
  if (user != null && Photographer) {
    // Ensure userDto and photographerDto exist before assigning IDs
    this.photographerToUserFeedbacks.userDto = this.photographerToUserFeedbacks.userDto || {};
    this.photographerToUserFeedbacks.userDto.userID = user;
  
    this.photographerToUserFeedbacks.photographerDto = this.photographerToUserFeedbacks.photographerDto || {};
    this.photographerToUserFeedbacks.photographerDto.photographerID = Photographer;
    if(this.photographerToUserFeedbacks.commonStatus == null || this.photographerToUserFeedbacks.commonStatus == '' ){
      Swal.fire('','Select The Selection Type','question')

    
    }else{
      this.photographerToUserFeedbacksService.saveFeedbacksUTP(this.photographerToUserFeedbacks).subscribe(
      
        (response)=>{
          console.log(this.photographerToUserFeedbacks.commonStatus)
  
         if(response.status === true){
          Swal.fire('',response.commonMessage,'success');
         }else{
          for(let y = 0;y<response.errorMessages.length;y++){
            Swal.fire('',response.errorMessages[y],'question');
          }
         }
        }
      );

}
  }else{
    Swal.fire('','Login Your Account','info')
  }

  

}
}