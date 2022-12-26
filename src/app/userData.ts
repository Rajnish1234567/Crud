import { AddressData } from "./addressData";
import { BankingData } from "./BankingData";

export class UserData{
  employeeId?:number;
  imageUrl?:string;
  name?: string;
  department?: string;
  mobile?: String;
  emailId?: String;
  salary?: number;
  addressList! : AddressData[];
  bankingDetails!:BankingData;
  
}
