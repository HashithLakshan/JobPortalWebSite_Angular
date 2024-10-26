import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotographerProfiles } from 'src/app/shared/photographerProfile';

@Component({
  selector: 'app-wedding-catogry',
  templateUrl: './wedding-catogry.component.html',
  styleUrls: ['./wedding-catogry.component.css']
})
export class WeddingCatogryComponent implements OnInit {
  
  photographerProfiles :PhotographerProfiles = {

    about: '',
    profileID:'1',
    profileNikeName:'',
    profileName: '',

    catogoryDto:{
        catogoryID:'1'
    },
    commonStatus:'ACTIVE',
    officialEmail:'',
    officialPhoneNo:'',
    officialProvince:'',
    photographerDto:{
        photographerID:'2'
    }
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BookingButton() {
    this.router.navigate(['/booking']); 
  }

  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }

  getAllBookings(){
    let PhotographerId = sessionStorage.getItem('PhotographerId')
    console.log('PhotographerId:: '+PhotographerId);
    
    // this.bookingService.getBookingByPhotographerActiveUsers(PhotographerId).subscribe(
    //   (response)=>{
    //     console.log(response);
    //     console.log('response.payload[0].length:: '+response.payload[0].length);
  
    //     this.bookingDetails = response.payload[0]
  
    //     for(let x=0; x<this.bookingDetails.length; x++){
    //       this.userDetailsDto.push(this.bookingDetails[0].userDto)
    //       // this.bookingDetails[0].userDto
    //     }





}
}