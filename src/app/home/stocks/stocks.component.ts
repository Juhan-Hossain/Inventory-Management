import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {


  updateMode = false;
  id = 0;
  productId = 0;
  quantity = 0;
  price = 0;
  date:Date= new Date();
  public container: Stock[] = [];
  constructor(private stockService: StockService) {
    this.render();
  }
  render() {
    this.stockService.getAll().subscribe(
      res => {
        this.container = res;
      },
      (error:Error) => {
        console.log(error.message);
      }
    );
  }


  ngOnInit(): void { }

  onEdit(index: number) {
    this.id = this.container[index].id;
    this.productId = this.container[index].productId;
    this.quantity = this.container[index].quantity;
    this.price = this.container[index].price;
    this.updateMode = true;

    // console.log(this.container[index]);
  }

  onDelete(id: number) {
    this.stockService.delete(id).subscribe(
      res => {
        this.container = res;
      },
      (error:Error) => {
        console.log(error.message);
      }
    );
    this.render();
  }

  onAdd() { }
  //implementing onsubmit()


  onSubmit() {
    // creating new stock;
    let stock = new Stock(this.id,this.price,this.productId,this.quantity,this.date);

    if (this.updateMode) {

      this.stockService.update(stock).subscribe(
        res => {
          this.container = res;
        },
        (error:Error) => {
          console.log(error.message);
        }
      );
      this.updateMode = false;
    } else {
      this.stockService.add(stock).subscribe(
        res => {
          this.container = res;
        },
        (error:Error) => {
          console.log(error.message);
        }
      );

    }
    this.id = 0;
    this.productId =0;
    this.quantity = 0;
    this.price = 0;

    this.render();
  }
}

