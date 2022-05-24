import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api2.service';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  datosApi!: any;
  filteredCoins: any;
  searchText = '';
  fileredCoins: any;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData() {
    this.apiService.obtenerDatos().subscribe(
      (res) => {
        this.datosApi = res;
        this.filteredCoins = this.datosApi;
      },
      (err) => console.log(err)
    );
  }
  searchCoin() {
    //console.log(this.searchText);
    this.fileredCoins = this.datosApi.filter(
      () =>
        this.datosApi.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        this.datosApi.symbol
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }
}
