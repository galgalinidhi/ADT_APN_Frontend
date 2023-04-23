import { Component } from '@angular/core';
import { LookinnApiService } from '../service/lookinn-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cities$: any[] = [];

  constructor(private lookinnApi: LookinnApiService) {}

  ngOnInit() {
    this.lookinnApi.getCities().subscribe((data: any) => {
      console.log(data);
      this.cities$ = data;
    })  
  }

}
