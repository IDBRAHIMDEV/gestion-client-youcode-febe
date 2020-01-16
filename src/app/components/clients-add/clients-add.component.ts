import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    balance: new FormControl(0, Validators.required)
  })

  constructor(
        private clientService: ClientService,
        private router: Router
       ) { }

  ngOnInit() {
  }

  saveClient() {

     if(this.clientForm.invalid) {
       alert('sir tal3ab')
       return;
     }

    this.clientService.persistClient(this.clientForm.value)
       .then(() => {
          this.router.navigateByUrl('/clients');
          
       })
       .catch(() => console.error('client not persist'))
  }

}
