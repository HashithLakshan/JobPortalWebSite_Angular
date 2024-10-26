import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/coustomer/users.service';
import { AutoGenrateId } from 'src/app/shared/autoGenrateId';
import { User } from 'src/app/shared/user';
// import { CustomerServiceService } from '../../../service/customerService/customer-service.service'; // Update the path accordingly
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-coustomer-registration',
  templateUrl: './coustomer-registration.component.html',
  styleUrls: ['./coustomer-registration.component.css']
})
export class CoustomerRegistrationComponent implements OnInit{

 

user : User = {

  userFirstName:'',
  userLstName:'',
  gender:'',
  userContactNumber:'',
  userName:'',
  password:'',
  userEmail:'',
  userID:6,
  commonStatus:'ACTIVE',
  userProfileImgUrl:'',

  siteRollDto: {
    rollID: 1
  }
};
commonMsg?:String;

reEnterPassword? : string;
image1: File | null = null;

  constructor(private usersService: UsersService, private location :Location , private autoIdGenrate: AutoGenrateId,private router : Router) { } 
 

  goBack():void{
    this.location.back();
  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  onSubmit():void{

    if(this.user.password === this.reEnterPassword){
    this.user.userID =  this.autoIdGenrate.getRandomArbitrary(12,49);
    console.log(this.user)

    this.usersService.registerUsers(this.user).subscribe(
      (response)=>{
        this.submitOtherData(response)

        if(response.status == true){
          Swal.fire('',response.commonMessage, 'success');
          this.router.navigate(['/coustomerLoggins'])
        }else{
          for(let x = 0;x<response.errorMessages.length;x++){
          Swal.fire('', response.errorMessages[x], 'question');
          }
        }

      }
    )

      } else{
    Swal.fire('','please Enter Same Password', 'error');
  }

}


submitOtherData(data: any){
  console.log(data);
  
  const paylord = {
    image1: this.image1,
    userID: data.payload[0].userID
  }
  if (paylord) {
    this.usersService.uploadImage(paylord).subscribe(
      data => {
        Swal.fire('', 'User Registerd Success!', 'success');
      },
      err => {
        // Swal.fire('Oops!', ' Product Save unsuccessful!\n Try Different Image Sizes.', 'error');
      }
    );
  }
}

public onFileChanged(event:any) {
  this.image1 = event.target.files[0];
    const fr = new FileReader();
    if (this.image1) {
      fr.readAsDataURL(this.image1);
    }

}
// navigateToOtherPage() {
//   this.router.navigate(['/coustomerLoggins']); // This will navigate to the '/other-page' route
// }


}