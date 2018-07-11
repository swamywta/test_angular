import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
const routes: Routes = [
  { path: 'clients', component: ClientsComponent, loadChildren: './clients/clients.module#ClientsModule' },
  { path : '', redirectTo: 'clients', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
