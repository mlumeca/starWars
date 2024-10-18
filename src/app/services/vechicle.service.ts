import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('https://swapi.dev/api/vehicles');
  }
}