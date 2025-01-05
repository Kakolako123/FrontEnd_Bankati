import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateClientComponent } from "./create-client/create-client.component";
import { CreateAgentComponent } from "./create-agent/create-agent.component";
import {TotaleComponent} from "./totale/totale.component";
import {Login1Component} from "./login1/login1.component";
import {Signup1Component} from "./signup1/signup1.component";
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TestComponent} from "./test/test.component";
import {FactureComponent} from "./facture/facture.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./cart/cart.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {AdminComponent} from "./admin/admin.component";
import {CreancierComponent} from "./creancier/creancier.component";
import {VirementComponent} from "./virement/virement.component";
import {RechargeComponent} from "./recharge/recharge.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {VirementCryptoComponent} from "./virement-crypto/virement-crypto.component";
import {DonationComponent} from "./donation/donation.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'total',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: '/virement',
  //   pathMatch: 'full'
  // },
  {
    path: 'signup1',
    component: Signup1Component
  },
  {
    path: 'client',
    component: CreateClientComponent
  },
  {
    path: 'agent',
    component: CreateAgentComponent
  },
  {
    path: 'total',
    component: TotaleComponent
  },
  {
    path: 'login1',
    component: Login1Component
  },
  {
    path: 'currency',
    component: CurrencyConverterComponent
  },
  {
    path: 'side-bar',
    component: SideBarComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'facture',
    component: FactureComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'creancier',
    component: CreancierComponent
  },
  {
    path: 'virement',
    component: VirementComponent
  },
  {
    path: 'recharge',
    component: RechargeComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
  {
    path: 'virementCrypto',
    component: VirementCryptoComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  },
];
