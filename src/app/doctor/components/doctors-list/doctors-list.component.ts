import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Doctor } from '../../models/doctor.model';
import { DoctorService } from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit, AfterViewInit {
  doctors: Doctor[] = [];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource<Doctor>([]);

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'successfulOperationsNumber'];

  @ViewChild(MatTable) doctorTable!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private doctorService: DoctorService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;

      this.dataSource.data = doctors;
    });
  }

  onSearch(input: HTMLInputElement) {
    if (input.value.length < 3) {
      if (this.doctors.length !== this.dataSource.data.length) {
        this.dataSource.data = this.doctors;
      }

      return;
    }

    const searchString = input.value.toLowerCase();
    const matchingDoctors = this.doctors.filter(doctor => {
      const combinedName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();

      return combinedName.includes(searchString);
    });

    this.dataSource.data = matchingDoctors;
  }


}
