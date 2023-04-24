import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LookinnApiService } from '../service/lookinn-api.service';
import { ActivatedRoute } from '@angular/router';

export interface ListingResponse {
  listings: {id: number, name: string}[];
}

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css']
})

export class PropertyListingsComponent implements OnInit {
  location: string;
  listings: {id: number, name: string}[] = [];
  currentPage = 1;
  itemsPerPage = 10;  
 
  get totalPages() {
    return Math.ceil(this.listings.length / this.itemsPerPage);
  }

  constructor(private route: ActivatedRoute, private lookinnApi: LookinnApiService) {
    this.location = this.route.snapshot.params['city'];
    console.log(this.location);
  }

  ngOnInit() {
    // Get the value of the 'location' parameter from the URL
    this.location = this.route.snapshot.paramMap.get('city') ?? '';

    // Fetch the property listings for the location from the URL
    this.fetchListings();
  }

  fetchListings() {
    this.lookinnApi.getlistings(this['location']).subscribe({
      next: (value: ListingResponse) => {
        this.listings = value.listings;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onLocationChange(location: string) {
    this.location = location;
    this.fetchListings();
  }
  
}





