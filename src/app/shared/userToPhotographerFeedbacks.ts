export class PhotographerToUserFeedbacks{
    commonStatus?: string;
    photographerDto?:{
        photographerID?:string;
    }
    userDto?:{
        userID?:string;
        commonStatus?: string;
    gender?: string;
    password?: string;
    userContactNumber?: string;
    userEmail?: string;
    userFirstName?: string;
    userLstName?: string;
    userName?: string;
    userProfileImgUrl?:string;
    }
    utoPDiscription?:string;
    utoPFeedbackID?:string;
    utoPSubject?:string;
    replingUserToPhotographer?:string;
}