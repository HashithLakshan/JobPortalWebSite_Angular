import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-shoot',
  templateUrl: './single-shoot.component.html',
  styleUrls: ['./single-shoot.component.css']
})
export class SingleShootComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BookingButton() {
    this.router.navigate(['/booking']); // This will navigate to the '/other-page' route
  }
  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }



}