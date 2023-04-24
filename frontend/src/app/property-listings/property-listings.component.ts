import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LookinnApiService } from '../service/lookinn-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface ListingResponse {
  listings: {id: number, name: string}[];
}

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css']
})
export class PropertyListingsComponent {

  @Output() onClick = new EventEmitter<number>();
  
  location: string;
  listing_id: number = 0;
  displayDetails: boolean = false;
  listings: {id: number, name: string}[] = [];
  currentPage = 1;
  itemsPerPage = 10;  
  listingDetails: any;
 
  get totalPages() {
    return Math.ceil(this.listings.length / this.itemsPerPage);
  }

  // constructor(private lookinnApi: LookinnApiService) {}
  constructor(private route: ActivatedRoute, private lookinnApi: LookinnApiService, private modalService: NgbModal) {
    this.location = this.route.snapshot.params['location'];
  }

  ngOnInit() {
    // Get the value of the 'location' parameter from the URL
    this.location = this.route.snapshot.paramMap.get('city') ?? '';

    // Fetch the property listings for the location from the URL
    this.fetchListings();
  }

  public fetchListings() {
    this.lookinnApi.getlistings(this['location']).subscribe({
      next: (value: ListingResponse) => {
        this.listings = value.listings;
        console.log(this.listings);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public onLocationChange(location: string) {
    this.location = location;
    this.fetchListings();
  }
  
  public getListingsDetails(listingId: number) {
        let listing_id = String(listingId);
        this.lookinnApi.listingdetails(listing_id).subscribe((data: any) => {
          console.log(data);
          this.listingDetails = data;
          this.displayDetails = true;
        });
    }
  }





