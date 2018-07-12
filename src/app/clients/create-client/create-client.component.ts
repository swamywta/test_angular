import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve, RouterStateSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
createClientForm: FormGroup;
submitted: boolean = false;
invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder,private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.createClientForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.createClientForm.invalid) {
      return;
    }
    var obj = {
      name: this.createClientForm.controls.name.value,
      phone:this.createClientForm.controls.phone.value,
      email:this.createClientForm.controls.email.value,
      company:this.createClientForm.controls.company.value,
      zip:this.createClientForm.controls.zip.value
    }
    // if(this.createClientForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
    //     this.router.navigate(['list-user']);
    // }else {
    //   this.invalidLogin = true;
    // }
    this.appService.create_client(obj).subscribe(response => {
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
