import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingResponse } from '../property-listings/property-listings.component';

@Injectable({
  providedIn: 'root'
})
export class LookinnApiService {

  baseUrl = 'https://arcnaray.pythonanywhere.com/';

  constructor(private http: HttpClient) {}

  
/*Nidhi Galgali*/
  public getCities(){
    return this.http.get(this.baseUrl+'/cities/')
  }

  public getlistings(location: string){
    location = location.replace(/['"]+/g, '')
    return this.http.get<ListingResponse>(`${this.baseUrl}/city/${location}/listings/`);
  }
 /*Preethi Sivakumar*/
  public listingdetails(listing_id: string): Observable<any>{
    console.log("got listing_id:", listing_id)
    console.log("executing lsitingDetails API-")
    console.log(this.baseUrl+'/listingsdetails/'+listing_id)
    return this.http.get(this.baseUrl+`/listingsdetails/${listing_id}`);
  }
/*Archana Narayanan*/
  public updateListings(listing_id: string, json_body: any) {
    return this.http.put(this.baseUrl+`/updatelistings/update/${listing_id}/`, json_body); 
  }

  public addListings(json_body: any) {
    return this.http.post(this.baseUrl+`/addListings/`, json_body); 
  }
/*Preethi Sivakumar*/
  public deleteListing(listing_id: string) {
    return this.http.delete(this.baseUrl+`/deletelistings/${listing_id}`); 
   
  }

  
}

