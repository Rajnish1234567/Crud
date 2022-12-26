import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankUpdateFormComponent } from './bank-update-form/bank-update-form.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component:EmpListComponent},
  {path:'create-employee', component:EmpFormComponent},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'employee-details/:id', component:EmpDetailsComponent},
  {path:'bank-details-update/:id', component:BankUpdateFormComponent},
  {path:'' , redirectTo:'employees', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
