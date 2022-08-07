import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private http: HttpClient) { }

  get = () => this.http.get<Dessert[]>(`${environment.RESTApi}GetDessert`);
}

export interface Dessert
{
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
