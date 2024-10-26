import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday-shoot',
  templateUrl: './birthday-shoot.component.html',
  styleUrls: ['./birthday-shoot.component.css']
})
export class BirthdayShootComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOtherPage() {
    this.router.navigate(['/booking']); // This will navigate to the '/other-page' route
  }

  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }


}


