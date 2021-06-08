import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://santander-dev-week-project.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise(); //interpolação de string - melhor forma
    //return this.http.get<Stock[]>(this.baseUrl + '/stock').toPromise();
    //vai trazer https://santander-dev-week-project.herokuapp.com/bootcamp/stock

  }
}
