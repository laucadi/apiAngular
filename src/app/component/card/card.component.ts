import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  datosApi!: any;
  pages: number = 1;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerData();
  }

  obtenerData() {
    this.apiService.obtenerDatos().subscribe(
      (res) => (this.datosApi = res),
      (err) => console.log(err)
    );
    console.log(this.datosApi);
  }
  pruebaEvento(e: any) {
    e.target;
    //alert('El actor se llama:' + e);
    Swal.fire({
      title: 'Description',
      text: e,
      icon: 'info',
      confirmButtonColor: '#1e3ba6',
    });
  }
}
