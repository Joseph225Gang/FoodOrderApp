import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  constructor(private http: HttpClient) { }

  get = () => this.http.get<Beverage[]>(`${environment.RESTApi}GetBeverage`);
}

export interface Beverage
{
  id: string;
  name: string;
  price: number;
  imageUrl: string
}
