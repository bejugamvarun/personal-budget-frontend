import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenExpiryComponent } from './token-expiry/token-expiry.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetComponent } from './budget/budget.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieBudgetComponent } from './pie-budget/pie-budget.component';
import { DonutExpenseComponent } from './donut-expense/donut-expense.component';
import { LineBudgetComponent } from './line-budget/line-budget.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
    TokenExpiryComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ExpensesComponent,
    AddBudgetComponent,
    BudgetComponent,
    AddExpenseComponent,
    BarChartComponent,
    PieBudgetComponent,
    DonutExpenseComponent,
    LineBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgChartsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
