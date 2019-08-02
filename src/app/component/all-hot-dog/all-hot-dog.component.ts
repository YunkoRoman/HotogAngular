import { Component, OnInit, DoCheck } from '@angular/core';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {Response} from "../../interfaces/Response";


@Component({
  selector: 'app-all-hot-dog',
  templateUrl: './all-hot-dog.component.html',
  styleUrls: ['./all-hot-dog.component.css']
})
//Виводить всі дані з бази
export class AllHotDogComponent implements OnInit, DoCheck {
  lists: any = [];
  host:string= 'http://ec2-18-222-176-127.us-east-2.compute.amazonaws.com:3000/';

  constructor(public HotDogServisService: HotDogServisService) { }

  ngOnInit() {
    this.HotDogServisService.GetHodDog().subscribe((data:Response) => {
      this.lists = data.msg;

    })
  }

  DeleteHotDog(id) {
   const value = this.lists.map(obj => {return obj.id});
    const index = value.indexOf(id);
    this.lists.splice(index,1);
    this.HotDogServisService.DeleteHodDog(id);

  }

  ngDoCheck(): void {
  }
}

