// ТУТ ВІДБУВАЄТЬСЯ ЗАГРЗКА ФОТО.

import { Component, OnInit } from '@angular/core';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {Response} from "../../interfaces/Response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent implements OnInit {
  selectedFile: any;
  id:number;
  constructor( private router: Router,
               private route: ActivatedRoute,
               private HotDogServisService: HotDogServisService
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
  onFileChange(event){
    console.log(event.target.files[0]);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  };
  AddPhotoSubmit() {
     const fd = new FormData();
    fd.append('photo', this.selectedFile, this.selectedFile.name);
    this.HotDogServisService.AddPhoto(this.id,fd).subscribe((data:Response) => {
      if (data.success == true) this.router.navigate(['']);
    })
  }

}
