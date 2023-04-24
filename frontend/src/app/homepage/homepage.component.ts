import { Component } from '@angular/core';
import { LookinnApiService } from '../service/lookinn-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cities$: any[] = [];

  constructor(private lookinnApi: LookinnApiService, private router: Router) {}

  ngOnInit() {
    this.lookinnApi.getCities().subscribe((data: any) => {
      console.log(data);
      this.cities$ = data;
    })  
  }

  public routeToLocations() {
    this.router.navigateByUrl('/locations');
  }

}
