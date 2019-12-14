import {Injectable} from "@angular/core";
import {Observable,throwError} from "rxjs";
import {HttpService} from "../core/http.service";
import {Booking} from "./booking.model";

@Injectable()
export class BookingService{
  static END_POINT="booking";

  constructor(private httpService: HttpService) {
  }

  readAll():Observable<Booking[]>{
    return this.httpService.get(BookingService.END_POINT);
  }

}
