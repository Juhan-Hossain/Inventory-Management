import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends RepositoryService {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "sale";
    this.url += this.endpoint;
  }

}

