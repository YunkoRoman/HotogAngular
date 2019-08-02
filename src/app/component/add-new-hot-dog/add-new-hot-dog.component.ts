import { Component, OnInit } from '@angular/core';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "../../interfaces/Response";

@Component({
  selector: 'app-add-new-hot-dog',
  templateUrl: './add-new-hot-dog.component.html',
  styleUrls: ['./add-new-hot-dog.component.css']
})
//Створення нового Хот Дога
export class AddNewHotDogComponent implements OnInit {
  id: number;
  name: string;
  description: string;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private HotDogServisService: HotDogServisService
  ) { }


  ngOnInit() {
  }

  createHotDogSubmit() {

    this.HotDogServisService.CreateHodDog(this.name, this.description).subscribe((data:Response) => {
      this.id = data.msg.id;

      if (data.success == true) this.router.navigate(['photo/'+ this.id])

    })
  }

}
