import { Component, OnInit } from '@angular/core';
import {Image} from "./image.model";
import {ImageService} from "./image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static URL = 'home';
  public images: Image[];
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.synchronize();
  }

  synchronize(){
    this.imageService.readAll().subscribe(
      data=>{
        this.images=data;
      }
    )
  }

}
