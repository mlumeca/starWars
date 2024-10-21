import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle.interfaces';
import { VehicleService } from '../../services/vechicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{
  imgUrl = 'https://starwars-visualguide.com/assets/img/vehicles/${item.url}.jpg';
  url = 'https://swapi.dev/api/vehicles/${item.url}/;'

  vehicleList: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((resp) => {
      this.vehicleList = resp.results; // con .results accedemos a la lista de la respuesta, no a la respuesta completa
    });
  }
}
