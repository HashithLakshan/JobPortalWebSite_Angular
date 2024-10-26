import { Component } from '@angular/core';
import { BookingService } from 'src/app/service/coustomer/booking.service';
import { Booking } from 'src/app/shared/booking';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photographers-bookings',
  templateUrl: './photographers-bookings.component.html',
  styleUrls: ['./photographers-bookings.component.css']
})
export class PhotographersBookingsComponent {
  booking : Booking= {
    bookingID:'',
    commonStatus:'ACTIVE',
    dates:'',
    location:'',
    shootTimeDuration:'',
    shootType:'',
    tellUsMoreDiscription:'',
userDto:{
userID: ''
},
photographerDto:{
  photographerID:''
}  
  };
  booking1 : Booking={
    bookingID:'',
    commonStatus:'ACTIVE',
    dates:'',
    location:'',
    shootTimeDuration:'',
    shootType:'',
    tellUsMoreDiscription:'',
userDto:{
userID: '',
userName: '',
commonStatus:'',
gender: '',
userContactNumber:'',
userEmail:'',
userFirstName:'',
userLstName:'',
}

};
    
serachinput?:String;
searchvalue?:String;
  bookingDetails : Booking[]=[];
  userDetailsDto:any[]=[];

  constructor(private bookingService: BookingService) { 
    this.getAllBookings();
  } // Inject CustomerServiceService

  onSubmit():void{
    console.log('im here!!!');
    console.log(this.booking);

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

}

getAllBookings(){
  let PhotographerId = sessionStorage.getItem('PhotographerId')
  console.log('PhotographerId:: '+PhotographerId);
  
  this.bookingService.getBookingByPhotographerActiveUsers(PhotographerId).subscribe(
    (response)=>{
      console.log(response);
      console.log('response.payload[0].length:: '+response.payload[0].length);

      this.bookingDetails = response.payload[0]

      for(let x=0; x<this.bookingDetails.length; x++){
        this.userDetailsDto.push(this.bookingDetails[0].userDto)
        // this.bookingDetails[0].userDto
      }
  
      
      console.log('this.bookingDetails::');
      console.log(this.bookingDetails);

      console.log('this.userDetailsDto::');
      console.log(this.userDetailsDto);
      
      
      
    }
  )
}

onViewBtn(bookingData: Booking, index: number){
  this.booking = bookingData;
}

onUpdate(){
  this.bookingService.updateBooking(this.booking).subscribe(
    (response)=>{
      if(response.status === true){
        Swal.fire ('',response.commonMessage,'success');
      }else{
        for(let x = 0;x<response.errorMessages.length;x++){
          Swal.fire('',response.errorMessages[0],'error')
        }
      }
    }
  )
}


onDelete(){
  if(this.booking.bookingID === null || this.booking.bookingID === ''){
    Swal.fire ('','Please cheack the delition Bookings','info')

}else{
  this.bookingService.deleteBooking(this.booking.bookingID).subscribe(
    (response)=>{
      if(response.status === true){
        Swal.fire ('',response.commonMessage,'success')
      }else{
        Swal.fire('',response.commonMessage,'error')
      }
    }
    );
}
}
onSearch(){
  const PhotographerId = sessionStorage.getItem('photographerID');  // Get the logged-in username from sessionStorage
  console.log(this.serachinput)

  if(this.serachinput == null || this.serachinput == ''){
    Swal.fire('','Please fill the empty field','question')

}else{
  switch (this.searchvalue) {
    case "name":

      this.bookingService.getBookingByUsersName(this.serachinput,PhotographerId).subscribe(
        
        (reponse)=>{
          if (reponse && reponse.payload && reponse.payload.length > 0) {
          this.bookingDetails = reponse.payload[0]
          for(let x=0; x<this.bookingDetails.length; x++){
            this.userDetailsDto.push(this.bookingDetails[0].userDto)
          }
          Swal.fire('',reponse.commonMessage,'info')
        }else{
            Swal.fire('',reponse.commonMessage,'info')
        }
        }
      )
      break;
      case "Id":
        this.bookingService.getBookingByUserId(this.serachinput,PhotographerId).subscribe(
          (reponse)=>{
            if (reponse && reponse.payload && reponse.payload.length > 0) {
            this.bookingDetails = reponse.payload[0]
            for(let x=0; x<this.bookingDetails.length; x++){
              this.userDetailsDto.push(this.bookingDetails[0].userDto)
              console.log(this.userDetailsDto)
            }
          }else{
            Swal.fire('',reponse.commonMessage,'error')

          }
          }
        )
        break;
    default:
      Swal.fire('','Please Select the Search Type','info')
      break;
  }

}
}
onDeleteTableItem(x : any){
  this.bookingService.deleteBooking(this.booking.bookingID).subscribe(
    (response)=>{
      if(response.status === true){
        Swal.fire ('',response.commonMessage,'success')
      }else{
        Swal.fire('',response.commonMessage,'error')
      }
    }
    )
}

}
