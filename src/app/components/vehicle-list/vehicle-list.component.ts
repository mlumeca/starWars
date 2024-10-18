import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interfaces';
import { VehicleService } from '../../services/vechicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{
  listadoVehiculos: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((respuesta) => {
      this.listadoVehiculos = respuesta;
    });
  }
}