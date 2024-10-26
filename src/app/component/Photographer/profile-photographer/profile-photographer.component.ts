import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PhotographerProfiles } from 'src/app/shared/photographerProfile';
import { PhotographerProfileService } from 'src/app/service/photographer-profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-photographer',
  templateUrl: './profile-photographer.component.html',
  styleUrls: ['./profile-photographer.component.css']
})
export class ProfilePhotographerComponent  implements OnInit {

  coverImg:File | null = null;
  proImg:File | null = null;

  photographerProfiles :PhotographerProfiles = {

    about: '',
    profileID:'',
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
        photographerID:''
    }
  };


  constructor(private photographerProfileService: PhotographerProfileService,private router :Router){}

  ngOnInit(): void {
  }


  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }


  onSubmit():void{
    console.log('im here!!!');
  //  *************************** catagery drop down inculded ***********************************
       this.photographerProfiles.profileID =this.getRandomArbitrary(10,50).toString();
    console.log(this.photographerProfiles);
let PhotographerID = sessionStorage.getItem('photographerID');
if(PhotographerID){
  this.photographerProfiles.photographerDto = this.photographerProfiles.photographerDto || {};
  this.photographerProfiles.photographerDto.photographerID = PhotographerID;

    this.photographerProfileService.registerProfiles(this.photographerProfiles).subscribe(
      (response)=>{
        if(response.status === true){
          this.submitOtherData(response);
          Swal.fire('',response.commonMessage,'success');
        }else{
          for(let x = 0;x<response.errorMessages.length;x++){
          Swal.fire('',response.errorMessages[x],'error');
          }
        }
      
      }
    )
  }
  }

  submitOtherData(data:any){
    console.log(data.payload[0].profileID);
    const paylord = {
      image1: this.proImg,
      image2: this.coverImg,
      profileID: data.payload[0].profileID
    }
    if (paylord) {
      this.photographerProfileService.uploadImgs(paylord).subscribe(
        data => {
          Swal.fire('', 'Profile Save Success', 'success');

        },
        err => {
          Swal.fire('Oops!', ' Product Save unsuccessful!\n Try Different Image Sizes.', 'error');
        }
      );
    }
 
  }

  getRandomArbitrary(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  public onFileChanged(event:any, x: number) {
    switch (x) {
    case 1:
      this.proImg = event.target.files[0];
      break;

    case 2:
      this.coverImg = event.target.files[0];
      break;
    default:
      console.log('default!')

  }

}

}



