import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, ActivatedRoute, Resolve, RouterStateSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
clients_list: any = [];
client_data: any = {
  name: '',
  email: '',
  phone: '',
  company: '',
  zip: ''
};
  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.get_clients()
  }
  get_clients(){
      this.appService.get_clients().subscribe(response => {
        if(response){
          this.clients_list = response.data;
          console.log(response);
        }
      })
  }
  onSubmit(){
    this.appService.search_clients(this.client_data).subscribe(response => {
      if(response){
        this.clients_list = response.data;
        console.log(response);
      }
    })
  }

}
