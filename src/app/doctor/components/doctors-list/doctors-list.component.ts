import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit, AfterViewInit {
  doctors: Doctor[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'successfulOperationsNumber'];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource<Doctor>(this.doctors);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;

      this.dataSource = new MatTableDataSource<Doctor>(doctors);
      console.log('this.doctors', this.doctors);
    });
  }
}
