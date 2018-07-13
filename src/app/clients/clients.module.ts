import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from'./edit-client/edit-client.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'create-client', component: CreateClientComponent },
  { path: 'edit-client/:client_id', component: EditClientComponent },
  { path: 'list', component: ListComponent },
  { path : '**', redirectTo: 'list'}

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule, ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
  declarations: [CreateClientComponent,  EditClientComponent, ListComponent]
})
export class ClientsModule { }
