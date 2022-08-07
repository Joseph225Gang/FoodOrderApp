import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainDishService {

  constructor(private http: HttpClient) { }

  get = () => this.http.get<MainDish[]>(`${environment.RESTApi}GetMainDish`);

}

export interface MainDish
{
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}
