import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-photographers-profiles',
  templateUrl: './photographers-profiles.component.html',
  styleUrls: ['./photographers-profiles.component.css']
})
export class PhotographersProfilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  PortfoliyoNavigate() {
    this.router.navigate(['/portfoliyo']); 
  }


}



