import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user : any;

  constructor(private router : Router,
              private clientService : ClientService) { }

  ngOnInit() {
  }

  onAdd()
  {
      //  let observableResult = this.clientService.insertUser(this.user);
      //  observableResult.subscribe((result)=>{
      //   result = this.user;
      //   console.log(result);
      //    this.router.navigate(['/add-member']);
      //  })
  }


}
