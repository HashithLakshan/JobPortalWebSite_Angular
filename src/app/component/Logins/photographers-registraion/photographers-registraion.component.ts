import { Component, OnInit } from '@angular/core';
import { PhotographerService } from 'src/app/service/coustomer/photographer.service';
import { Photographer } from 'src/app/shared/photographer';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photographers-registraion',
  templateUrl: './photographers-registraion.component.html',
  styleUrls: ['./photographers-registraion.component.css']
})
export class PhotographersRegistraionComponent  implements OnInit {

  ngOnInit(): void {
  }

  photographer: Photographer = {
    photographerFirstName: '',
    phographerPassword:'',
    commonStatus:'ACTIVE',
    photographerAddress:'',
    photogapherContactNumber:'',
    photographerEmail:'',
    photographerGender:'',
    photographerID:'',
    photographerNIC:'',
    photographerUserName:'',
    photohrapherLastName:'',
    siteRollDto:{
      rollID: 2
    }
  };

  reEnterPassword?:string;
  constructor(private router:Router ,private location:Location, private photogtapherService: PhotographerService){}

  goBack(): void{
    this.location.back();
  }
 

  onSubmit():void{
    if(this.photographer.phographerPassword === this.reEnterPassword){

    this.photogtapherService.registerPhotographer(this.photographer).subscribe(
      (response)=>{
        if(response.status == true){
          Swal.fire('',response.commonMessage,'success');
          this.router.navigate(['/logonPhotographer']);
        }else{
          console.log(response.errorMessages[0])
          for(let i = 0;i<response.errorMessages.length;i++){
          
              Swal.fire('',response.errorMessages[i],'error');
          }
          Swal.fire('',response.commonMessage,'question');
        }
      }
    )
    }else{
      Swal.fire('','Enter the same Password','error');

    }
    
  }
 
  
  // navigateToOtherPage() {
  //   this.router.navigate(['/home']); // This will navigate to the '/other-page' route
  // }

}
