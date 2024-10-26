import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-graduvation-shoot',
  templateUrl: './graduvation-shoot.component.html',
  styleUrls: ['./graduvation-shoot.component.css']
})
export class GraduvationShootComponent implements OnInit {

  constructor(private router: Router , private location :Location) { }

  goBackPage():void{
    this.location.back();
  }

  ngOnInit(): void {
  }

  bookingbutton() {
    this.router.navigate(['/booking']); // This will navigate to the '/other-page' route
  }

  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }


}
