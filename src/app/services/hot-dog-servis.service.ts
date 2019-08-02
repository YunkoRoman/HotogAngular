import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotDogServisService {

  constructor(
    public http: HttpClient
  ) {
  }

  GetHodDog() {
    return this.http.get('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog')
  };
  CreateHodDog(name, description) {
    return this.http.post('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog',{name, description} )
  };
  AddPhoto(id,fd) {
    return this.http.put('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog/photo/'+ id, fd  )
  }
  UpdateHodDog(name, description, id) {
    return this.http.put('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog/'+ id, {name, description})
  };
  OneHodDog(id) {
    return this.http.get('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog/' + id)
  };
  DeleteHodDog(id) {
    return this.http.delete('http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/HotDog/' + id, )
  }
}
