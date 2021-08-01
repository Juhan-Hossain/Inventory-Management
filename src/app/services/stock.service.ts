import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class StockService extends RepositoryService {

  constructor(http: HttpClient ) {
    super(http);
    this.endpoint = "stock";
    this.url += this.endpoint;
  }

}

