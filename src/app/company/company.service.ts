import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor() {}

  getCompanies(): Company[] {
    return [
      { name: 'company 1', email: 'email 1', phone: 22222 },
      { name: 'company 2', email: 'email 2', phone: 98765 }
    ];
  }
}
