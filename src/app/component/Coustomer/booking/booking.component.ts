import { Component } from '@angular/core';
import { BookingService } from 'src/app/service/coustomer/booking.service';
import { Booking } from 'src/app/shared/booking';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  booking : Booking= {
    
    bookingID:'',
    commonStatus:'ACTIVE',
    dates:'',
    location:'',
    shootTimeDuration:'',
    shootType:'',
    tellUsMoreDiscription:'',
userDto:{
  userID: '',
},
photographerDto:{
  photographerID:''
}  
  };

  constructor(private bookingService: BookingService) { } // Inject CustomerServiceService


  onSubmit():void{
    let user =  sessionStorage.getItem('userID');
    let Photographer = sessionStorage.getItem('photographerID');

    if (user != null && Photographer) {
      // Ensure userDto and photographerDto exist before assigning IDs
      this.booking.userDto = this.booking.userDto || {};
      this.booking.userDto.userID = user;
    
      this.booking.photographerDto = this.booking.photographerDto || {};
      this.booking.photographerDto.photographerID = Photographer;
  

    this.bookingService.CreateBookings(this.booking).subscribe(
      (response)=>{
if(response.status === true){
  Swal.fire('',response.commonMessage,'success')
}else{
  for(let x = 0; x<response.errorMessages.length;x++){
    Swal.fire('',response.errorMessages[x],'question')
  }
}

      }
    )
  }else{
    Swal.fire('','Login Your Account','info')
  }

}







}
