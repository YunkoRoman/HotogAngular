import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHotDogComponent } from './component/all-hot-dog/all-hot-dog.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { EditHotDogComponent } from './component/edit-hot-dog/edit-hot-dog.component';
import {FormsModule} from "@angular/forms";
import { AddNewHotDogComponent } from './component/add-new-hot-dog/add-new-hot-dog.component';
import { AddphotoComponent } from './component/addphoto/addphoto.component';


const routes: Routes = [
  {path:'', component: AllHotDogComponent},
  {path:'editHotDog/:id', component: EditHotDogComponent},
  {path:'create', component: AddNewHotDogComponent},
  {path:'photo/:id', component: AddphotoComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    AllHotDogComponent,
    EditHotDogComponent,
    AddNewHotDogComponent,
    AddphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
