import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navibar1Component } from './component/Coustomer/navibar1/navibar1.component';
import { Navibar2Component } from './component/Coustomer/navibar2/navibar2.component';
import { FooterComponent } from './component/Coustomer/footer/footer.component';
import { HomeComponent } from './component/Coustomer/home/home.component';
import { GalleryComponent } from './component/Coustomer/gallery/gallery.component';
import { CoustomerComponent } from './component/Logins/coustomer/coustomer.component';
import { ChooseSnipperComponent } from './component/Coustomer/choose-snipper/choose-snipper.component';
import { WeddingCatogryComponent } from './component/Coustomer/wedding-catogry/wedding-catogry.component';
import { PreshootCatgoryComponent } from './component/Coustomer/preshoot-catgory/preshoot-catgory.component';
import { BirthdayShootComponent } from './component/Coustomer/birthday-shoot/birthday-shoot.component';
import { GraduvationShootComponent } from './component/Coustomer/graduvation-shoot/graduvation-shoot.component';
import { SingleShootComponent } from './component/Coustomer/single-shoot/single-shoot.component';
import { HowitworkComponent } from './component/Coustomer/howitwork/howitwork.component';
import { CoustomerRegistrationComponent } from './component/Logins/coustomer-registration/coustomer-registration.component';
import { PhotographersRegistraionComponent } from './component/Logins/photographers-registraion/photographers-registraion.component';
import { BookingComponent } from './component/Coustomer/booking/booking.component';
import { PhtogrpherPortfoliyoComponent } from './component/Coustomer/phtogrpher-portfoliyo/phtogrpher-portfoliyo.component';
import { SidenavAdminComponent } from './component/Admin/sidenav-admin/sidenav-admin.component';
import { UserdetailsComponent } from './component/Admin/userdetails/userdetails.component';
import { PhotographerDetailsComponent } from './component/Admin/photographer-details/photographer-details.component';
import { NavbartopComponent } from './component/Admin/navbartop/navbartop.component';
import { UserfeedbackComponent } from './component/Admin/userfeedback/userfeedback.component';
import { PhotographersFeedbacksComponent } from './component/Admin/photographers-feedbacks/photographers-feedbacks.component';
import { PhotographersProfilesComponent } from './component/Admin/photographers-profiles/photographers-profiles.component';
import { PhotographerSideNavbarComponent } from './component/Photographer/photographer-side-navbar/photographer-side-navbar.component';
import { PhotographerTopNavbarComponent } from './component/Photographer/photographer-top-navbar/photographer-top-navbar.component';
import { PhotographerDashboardComponent } from './component/Photographer/photographer-dashboard/photographer-dashboard.component';
import { PhotographersBookingsComponent } from './component/Photographer/photographers-bookings/photographers-bookings.component';
import { PhotographerUserFeedbackComponent } from './component/Photographer/photographer-user-feedback/photographer-user-feedback.component';
import { UserSatisficationComponent } from './component/Photographer/user-satisfication/user-satisfication.component';
import { PhotographerPakegesComponent } from './component/Photographer/photographer-pakeges/photographer-pakeges.component';
import { ProfilePhotographerComponent } from './component/Photographer/profile-photographer/profile-photographer.component';
import { CoustomerProfileComponent } from './component/Coustomer/coustomer-profile/coustomer-profile.component';
import { ProfileSettingsComponent } from './component/Coustomer/profile-settings/profile-settings.component';
import { ProfileMessagesComponent } from './component/Coustomer/profile-messages/profile-messages.component';
import { LoginPhotographerComponent } from './component/Logins/login-photographer/login-photographer.component';





const routes: Routes = [
  {path:"navbar1",component:Navibar1Component},
  {path:"navbar2",component:Navibar2Component},
  {path:"footer",component:FooterComponent},
  {path:"home",component:HomeComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"coustomerLoggins",component:CoustomerComponent},
  {path:"chooseSnipper",component:ChooseSnipperComponent},
  {path:"weddingCatogory",component:WeddingCatogryComponent},
  {path:"preshootCatogory",component:PreshootCatgoryComponent},
  {path:"birthdayshoot",component:BirthdayShootComponent},
  {path:"graduvationshoot",component:GraduvationShootComponent},
  {path:"singleShoot",component:SingleShootComponent},
  {path:"howitwork",component:HowitworkComponent},
  {path:"userRegistration",component:CoustomerRegistrationComponent},
  {path:"photographersRegistraion",component:PhotographersRegistraionComponent},
  {path:"booking",component:BookingComponent},
  {path:"portfoliyo",component:PhtogrpherPortfoliyoComponent},
  {path:"AdminsideNave",component:SidenavAdminComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"viewPhotographerDetails",component:PhotographerDetailsComponent},
  {path:"topNvbar",component:NavbartopComponent},
  {path:"userFeedback",component:UserfeedbackComponent},
  {path:"photographerFeedbacks",component:PhotographersFeedbacksComponent},
  {path:"photographersProfiles",component:PhotographersProfilesComponent},
  {path:"photographerSideNavbar",component:PhotographerSideNavbarComponent},
  {path:"photographerTopNav",component:PhotographerTopNavbarComponent},
  {path:"photographerDashboard",component:PhotographerDashboardComponent},
  {path:"photographersBookings",component:PhotographersBookingsComponent},
  {path:"photographerUserFeedback",component:PhotographerUserFeedbackComponent},
  {path:"userSatisfication",component:UserSatisficationComponent},
  {path:"photographerPakeges",component:PhotographerPakegesComponent},
  {path:"profilePhotographer",component:ProfilePhotographerComponent},
  {path:"coustomerProfile",component:CoustomerProfileComponent},
  {path:"profileSttings",component:ProfileSettingsComponent},
  {path:"profileMessges",component:ProfileMessagesComponent},
  {path:"logonPhotographer",component:LoginPhotographerComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
