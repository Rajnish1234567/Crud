import { AddressData } from "./addressData";
import { BankingData } from "./BankingData";
import { RoleData } from "./roleData";

export class UserData{
  employeeId?:number;
  imageUrl?:string;
  name?: string;
  department?: string;
  mobile?: String;
  emailId?: String;
  salary?: number;
  password?: String;
  addressList! : AddressData[];
  bankingDetails!:BankingData;
  roleList!: RoleData[];
}
