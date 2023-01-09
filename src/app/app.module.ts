import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { BankUpdateFormComponent } from './bank-update-form/bank-update-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EmpService } from './emp.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpFormComponent,
    EmpListComponent,
    FooterComponent,
    UpdateEmployeeComponent,
    EmpDetailsComponent,
    BankUpdateFormComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
