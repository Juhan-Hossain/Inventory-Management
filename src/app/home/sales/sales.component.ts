import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  updateMode = false;
  id = 0;
  productId = 0;
  quantity = 0;
  customerId = 0;
  public container: Sale[] = [];
  constructor(private saleService: SaleService) {
    this.render();
  }
  render() {
    this.saleService.getAll().subscribe(
      (res) => {
        this.container = res;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }

  ngOnInit(): void {}

  onEdit(index: number) {
    this.id = this.container[index].id;
    this.productId = this.container[index].productId;
    this.quantity = this.container[index].quantity;

    this.customerId = this.container[index].customerId;
    this.updateMode = true;

    // console.log(this.container[index]);
  }

  onDelete(id: number) {
    this.saleService.delete(id).subscribe(
      (res) => {
        this.container = res;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
    this.render();
  }

  onAdd() {}
  //implementing onsubmit()

  onSubmit() {
    // creating new customer;
    let sale = new Sale(
      this.id,
      this.productId,
      this.quantity,
      this.customerId
    );
    // console.log(category);
    if (this.updateMode) {
      this.saleService.update(sale).subscribe(
        (res) => {
          this.container = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );

      this.updateMode = false;
    } else {
      this.saleService.add(sale).subscribe(
        (res) => {
          this.container = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
    }
    this.id = 0;
    this.productId = 0;
    this.quantity = 0;
    this.customerId = 0;

    this.render();
  }
}
