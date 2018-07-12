import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve, RouterStateSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  editClientForm: FormGroup;
  client_data: any = {};
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder,private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.editClientForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   email: ['', Validators.required],
    //   company: ['', Validators.required],
    //   zip: ['', Validators.required],
    // });
    this.get_client_data(this.route.snapshot.params['client_id']);
  }
  get_client_data(client_id){
    this.appService.get_client_data(client_id).subscribe(response => {
      if(response){
        this.client_data = response.data;
        console.log(response);
      }
    })
  }
  onSubmit() {
    console.log(this.editClientForm);
    this.submitted = true;
    if (this.editClientForm.invalid) {
      return;
    }
    var obj = {
      name: this.editClientForm.controls.name.value,
      phone:this.editClientForm.controls.phone.value,
      email:this.editClientForm.controls.email.value,
      company:this.editClientForm.controls.company.value,
      zip:this.editClientForm.controls.zip.value
    }
    // if(this.editClientForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
    //     this.router.navigate(['list-user']);
    // }else {
    //   this.invalidLogin = true;
    // }
    this.appService.edit_client(obj).subscribe(response => {
    if (response.state === 'success') {

      // this.router.navigate(['/apps/crm/crm-edit-franchisee' + '/' + franchisee_Id]);
      this.router.navigate(['/clients/list']);
      // this.create_flag = false;
      // this.showfolderfile = false;
      // this.folder_name = '';
      // return this.get_folder_by_id(this.parent_id);
    }
    if (response.state === 'failure') {
      this.invalidLogin = true;
    }
  })
  }

}
