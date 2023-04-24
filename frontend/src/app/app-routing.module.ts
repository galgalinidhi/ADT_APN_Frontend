import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import {ListingLocationsComponent } from './listing-locations/listing-locations.component'
import { PropertyListingsComponent } from './property-listings/property-listings.component';
const routes: Routes = [
   { path: 'home', component: HomepageComponent },
   { path: 'locations', component: ListingLocationsComponent },
   { path: 'listings/:city', component: ListingLocationsComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   {path: 'listings', component:PropertyListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
