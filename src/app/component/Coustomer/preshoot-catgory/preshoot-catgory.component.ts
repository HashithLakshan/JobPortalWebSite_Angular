import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preshoot-catgory',
  templateUrl: './preshoot-catgory.component.html',
  styleUrls: ['./preshoot-catgory.component.css']
})
export class PreshootCatgoryComponent implements OnInit {

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
