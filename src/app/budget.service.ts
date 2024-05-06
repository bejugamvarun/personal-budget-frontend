import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token');
  addBudget(
    budgetCriteria: string,
    amount: number,
    selectedMonths: string[]
  ): Observable<any> {
    let headers = new HttpHeaders();
    if (this.token !== null) {
      headers = headers.set('Authorization', this.token);
    }

    const data = {
      budgetCriteria: budgetCriteria,
      amount: amount,
      selectedMonths: selectedMonths,
    };
    return this.http.post<any>(`${this.apiUrl}/addBudget`, data, {
      headers: headers,
    });
  }
  getBudgetByMonth(month: string): Observable<any> {
    let headers = new HttpHeaders();
    if (this.token !== null) {
      headers = headers.set('Authorization', this.token);
    }
    return this.http.get<any>(`${this.apiUrl}/getBudget/${month}`, {
      headers: headers,
    });
  }
}
