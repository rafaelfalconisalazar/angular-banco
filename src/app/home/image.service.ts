import {Injectable} from "@angular/core";
import {Observable,throwError} from "rxjs";
import {HttpService} from "../core/http.service";
import {Image} from "./image.model";
@Injectable()
export class ImageService{
  static END_POINT="images";

  constructor(private httpService:HttpService){

  }

  readAll():Observable<Image[]>{
    return this.httpService.get(ImageService.END_POINT);
  }
}
