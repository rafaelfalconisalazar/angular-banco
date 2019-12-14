import {Component, OnInit, ViewChild} from '@angular/core';
import {Booking} from "./booking.model";
import {BookingService} from "./booking.service";
import {
  MatPaginator, MatTableDataSource, MatSort
} from "@angular/material";

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  static URL = "reservas";
  displayedColumns = ['date', 'field', 'user'];
  public bookings: Booking[];
  dataSource: MatTableDataSource<Booking>;
  @ViewChild(MatPaginator, {static: false})
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.synchronize();
  }

  synchronize() {
    this.bookingService.readAll().subscribe(
      data => {
          this.dataSource = new MatTableDataSource<Booking>(data),
          this.dataSource.sort = this.sort,
          this.dataSource.paginator = this.paginator;
      }
    )
  }

}
