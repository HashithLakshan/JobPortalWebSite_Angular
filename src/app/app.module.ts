import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navibar1Component } from './component/Coustomer/navibar1/navibar1.component';
import { Navibar2Component } from './component/Coustomer/navibar2/navibar2.component';
import { HomeComponent } from './component/Coustomer/home/home.component';
import { FooterComponent } from './component/Coustomer/footer/footer.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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






@NgModule({
  declarations: [
    AppComponent,
    Navibar1Component,
    Navibar2Component,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    CoustomerComponent,
    ChooseSnipperComponent,
    WeddingCatogryComponent,
    PreshootCatgoryComponent,
    BirthdayShootComponent,
    GraduvationShootComponent,
    SingleShootComponent,
    HowitworkComponent,
    CoustomerRegistrationComponent,
    PhotographersRegistraionComponent,
    BookingComponent,
    PhtogrpherPortfoliyoComponent,
    SidenavAdminComponent,
    UserdetailsComponent,
    PhotographerDetailsComponent,
    NavbartopComponent,
    UserfeedbackComponent,
    PhotographersFeedbacksComponent,
    PhotographersProfilesComponent,
    PhotographerSideNavbarComponent,
    PhotographerTopNavbarComponent,
    PhotographerDashboardComponent,
    PhotographersBookingsComponent,
    PhotographerUserFeedbackComponent,
    UserSatisficationComponent,
    PhotographerPakegesComponent,
    ProfilePhotographerComponent,
    CoustomerProfileComponent,
    ProfileSettingsComponent,
    ProfileMessagesComponent,
    LoginPhotographerComponent
  
    
    
  
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
