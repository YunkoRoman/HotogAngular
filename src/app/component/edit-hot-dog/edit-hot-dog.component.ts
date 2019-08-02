import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {Response} from "../../interfaces/Response";


@Component({
  selector: 'app-edit-hot-dog',
  templateUrl: './edit-hot-dog.component.html',
  styleUrls: ['./edit-hot-dog.component.css']
})
//Редагування Хот Дога
export class EditHotDogComponent implements OnInit {
  name: string;
  description: string;
  id: number;
  constructor( private router: Router,
               private route: ActivatedRoute,
               private HotDogServisService: HotDogServisService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.HotDogServisService.OneHodDog(this.id).subscribe((data:Response)=> {
      this.name = data.msg.name;
      this.description = data.msg.description
    })
  }

  onEditSubmit() {
    this.HotDogServisService.UpdateHodDog(this.name, this.description, this.id).subscribe((data:Response) => {
      if (data.success == true) this.router.navigate(['photo/'+ this.id])
    })
  }
}
