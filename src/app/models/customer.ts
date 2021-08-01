import { EmailValidator } from "@angular/forms";

export class Customer {
  constructor(
     public id: number,
    public name: string,
   public address: string,
    public contact: number,
   public email: string
  ) {

}
}
