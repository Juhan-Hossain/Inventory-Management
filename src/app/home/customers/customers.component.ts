import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  updatemode = false;
  id = 0;
  name = "";
  address = "";
  contact = 0;
  email = "";
  public container: Customer[] = [];
  constructor(private customerService: CustomerService) {
    this.render();
   }

  render() {
    this.customerService.getAll().subscribe(
      res => {
        this.container = res;
      },
      (error:Error) => {
        console.log(error.message);
      }
    );
  }
  ngOnInit(): void {
  }
  onEdit(index: number) {
    this.id = this.container[index].id;
    this.name = this.container[index].name;
    this.address = this.container[index].address;

    this.contact = this.container[index].contact;
    this.updatemode = true;

    // console.log(this.container[index]);
  }
  onDelete(id: number) {
    this.customerService.delete(id).subscribe(
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
    // creating new customer;
    let customer = new Customer(this.id, this.name, this.address,this.contact,this.email);
    // console.log(category);
    if (this.updatemode) {

      this.customerService.update(customer).subscribe(
        res => {
          this.container = res;
        },
        (error:Error) => {
          console.log(error.message);
        }
      );
      this.updatemode = false;
    } else {
      this.customerService.add(customer).subscribe(
        res => {
          this.container = res;
        },
        (error:Error) => {
          console.log(error.message);
        }
      );

    }
    this.name = "";
    this.address = "";
    this.id = 0;
    this.contact = 0;
    this.email = "";
    this.render();
  }
}
