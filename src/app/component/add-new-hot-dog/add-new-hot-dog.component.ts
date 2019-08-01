import { Component, OnInit } from '@angular/core';
import {HotDogServisService} from "../../services/hot-dog-servis.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "../../interfaces/Response";

@Component({
  selector: 'app-add-new-hot-dog',
  templateUrl: './add-new-hot-dog.component.html',
  styleUrls: ['./add-new-hot-dog.component.css']
})
export class AddNewHotDogComponent implements OnInit {
  id: number;
  name: string;
  description: string;
  selectedFile:File = null;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private HotDogServisService: HotDogServisService
  ) { }


  ngOnInit() {
  }
  // onFileChange(event){
  //   console.log(event.target.files[0]);
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(this.selectedFile);
  // };
  createHotDogSubmit() {
   //  const fd = new FormData();
   // fd.append('photo', this.selectedFile, this.selectedFile.name);

    this.HotDogServisService.CreateHodDog(this.name, this.description).subscribe((data:Response) => {
      this.id = data.msg.id;
      console.log(this.id);
      if (data.success == true) this.router.navigate(['photo/'+ this.id])
    })
  }

}
