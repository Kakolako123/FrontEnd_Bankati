import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'client',
    loadComponent: () => import('./create-client/create-client.component').then(m => m.CreateClientComponent)
  },
  {
    path: 'agent',
    loadComponent: () => import('./create-agent/create-agent.component').then(m => m.CreateAgentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
