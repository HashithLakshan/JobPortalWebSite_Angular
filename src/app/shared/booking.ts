import { Photographer } from "./photographer";
import { User } from "./user";

export class Booking{
    bookingID?:string;
    commonStatus?: string;
    dates?:string;
    location?: string;
    shootTimeDuration?:string;
    shootType?:string;
    tellUsMoreDiscription?:string;
    photographerDto?:{
        photographerID?:string;
    }
userDto?:{
userID?: String;
userName?: string;
commonStatus?:string;
gender?: string;
userContactNumber?:string;
userEmail?:string;
userFirstName?:string;
userLstName?:string;
}
       
}
