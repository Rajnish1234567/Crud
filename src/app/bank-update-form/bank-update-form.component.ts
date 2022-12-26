import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { BankingData } from '../BankingData';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-bank-update-form',
  templateUrl: './bank-update-form.component.html',
  styleUrls: ['./bank-update-form.component.css']
})
export class BankUpdateFormComponent implements OnInit {

  updatedDetails: BankingData = new BankingData();
  bankId!: number;

  constructor(
    private employeeService: EmpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.bankId = this.route.snapshot.params['id'];
    this.employeeService.getBankDetailsByBankId(this.bankId).subscribe(data => {
      this.updatedDetails = data;
  }, error => {
    console.log(error);
    // alert("Error");
  });

  }

  editBankDetails() {
    this.employeeService.updateBankDetails(this.updatedDetails).subscribe(data => {
      this.router.navigate(['employees']);
    }, error => {
      console.log(error);
      // alert("error");
    });
  }

}
