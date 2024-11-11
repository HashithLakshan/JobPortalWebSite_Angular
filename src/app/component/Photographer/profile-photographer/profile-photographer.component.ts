import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PhotographerProfiles } from 'src/app/shared/photographerProfile';
import { PhotographerProfileService } from 'src/app/service/photographer-profile.service';
import Swal from 'sweetalert2';
import { CatagoryService } from 'src/app/service/coustomer/catagory.service';
import { Categaroy } from 'src/app/shared/category';
import { __values } from 'tslib';

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
        catogoryID:'',
        catogoryName:''
    },
    commonStatus:'ACTIVE',
    officialEmail:'',
    officialPhoneNo:'',
    officialProvince:'',
    photographerDto:{
        photographerID:''
    }
  };
  catogorys : Categaroy = {
     catogoryID:'',
        catogoryName:'',
        catagoryPhoto:''
  };
  selectedCategory: string = '';
catagory : Categaroy [] =[];

  constructor(private photographerProfileService: PhotographerProfileService,private router :Router,private catogoryService : CatagoryService){
   this.getAllCatagory();

  }

  ngOnInit(): void {
  }


  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }


  getAllCatagory(){
this.catogoryService.getAllCatogory().subscribe(
  (response)=>{
// this.catagory=response.payload[0];
this.catagory = response.payload[0];
this.catogorys = this.catagory[0];

  }
);


  }


   onDropdownChange(event : any){
    const selectedValue = event.target.value;
      this.selectedCategory = selectedValue;
   
  }

  onSubmit():void{
  
   

  //  *************************** catagery drop down inculded ***********************************
       this.photographerProfiles.profileID =this.getRandomArbitrary(10,50).toString();
    console.log(this.photographerProfiles);
let PhotographerID = sessionStorage.getItem('photographerID');
if(PhotographerID){
  this.photographerProfiles.photographerDto = this.photographerProfiles.photographerDto || {};
  this.photographerProfiles.photographerDto.photographerID = PhotographerID;
  this.photographerProfiles.catogoryDto = this.photographerProfiles.catogoryDto || {};
  this.photographerProfiles.catogoryDto.catogoryID = this.selectedCategory;
  console.log(this.selectedCategory)
  console.log(this.photographerProfiles);
  if(this.selectedCategory){

    
  

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
  }else{
    Swal.fire ('','Select your Official Job title','info');

  }
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



