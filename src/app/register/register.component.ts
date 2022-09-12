import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup|any
  visible!:boolean

  constructor(private formBuilder:FormBuilder , private router:Router) { 
    this.userForm = this.formBuilder.group({
      userName:new FormControl('',[Validators.required]),
      userEmail:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]), 
    });
  }

  ngOnInit(): void {
    this.userForm.reset()
  }

  register(userForm:FormGroup){
      alert("Successfully Registered..!")
      this.router.navigate(['home'])
      userForm.reset()
  }

  get userName(){
    return this.userForm.get('userName')
  }

  get phoneNumber(){
    return this.userForm.get('phoneNumber')
  }

  get userEmail(){
    return this.userForm.get('userEmail')
  }

}
