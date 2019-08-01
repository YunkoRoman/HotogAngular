import { Component, OnInit, DoCheck } from '@angular/core';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {Response} from "../../interfaces/Response";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-all-hot-dog',
  templateUrl: './all-hot-dog.component.html',
  styleUrls: ['./all-hot-dog.component.css']
})
export class AllHotDogComponent implements OnInit, DoCheck {
  lists: any = [];
  host:string= 'http://localhost:3000/';

  constructor(public HotDogServisService: HotDogServisService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.HotDogServisService.GetHodDog().subscribe((data:Response) => {
      console.log(data.msg);
      this.lists = data.msg;

    })
  }

  DeleteHotDog(id) {
   const value = this.lists.map(obj => {return obj.id});
    const index = value.indexOf(id);
    this.lists.splice(index,1);
    this.HotDogServisService.DeleteHodDog(id).subscribe((data: Response) => {
      console.log(data.msg);
    });

  }

  ngDoCheck(): void {
  }
}

