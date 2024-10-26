import { Component } from '@angular/core';
import { PakegesService } from 'src/app/service/coustomer/pakeges.service';
import { Pakege } from 'src/app/shared/pakege';

@Component({
  selector: 'app-photographer-pakeges',
  templateUrl: './photographer-pakeges.component.html',
  styleUrls: ['./photographer-pakeges.component.css']
})
export class PhotographerPakegesComponent {
  Pakeges : Pakege = {

    commonStatus: 'ACTIVE',
    pakegeCode: '',
    pakegePrice: '',
    paragraph1: '',
    paragraph2: '',
    pakegeName: '',
    paragraph3: '',
    paragraph4: '',
    paragraph5: '',
    photographersProfilesDto:{
    profileID:42
  }
};
PakegeDetails : Pakege[]=[];
profileDetailsDto:any[]=[];
constructor(private pakegesService: PakegesService) {
this.getAllpakeges();


 } // Inject CustomerServiceService

onSubmit():void{
  console.log('im here!!!');
  console.log(this.Pakeges);

this.pakegesService.savePakeges(this.Pakeges).subscribe(
  (response)=>{
    console.log(response);
  }

)

}

getAllpakeges(){
  let profileID = sessionStorage.getItem('profileID')
  console.log('profileID:: '+profileID);
  
  this.pakegesService.getpakeges(profileID).subscribe(
    (response)=>{
      console.log(response);
      console.log('response.payload[0].length:: '+response.payload[0].length);

      this.PakegeDetails = response.payload[0]
      }
  
    )      
    }
    onViewBtn(pakegeData: Pakege, index: number){
      this.Pakeges = pakegeData;
    }

onUpdate(){
  this.pakegesService.updatepakeges(this.Pakeges).subscribe(
    (response)=>{
      console.log(response);
    }
  )
}


onDelete(){
  this.pakegesService.deletepakeges(this.Pakeges.pakegeCode).subscribe(
    data=>{

    }
  )
}



}




