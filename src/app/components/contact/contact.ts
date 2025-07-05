import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  name = '';
  email = '';
  message = '';
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(){
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)])
    })

  }

  saveData(data:any){
    console.log(data)
    // let contact = {
    //   name: this.contactForm.get('name'),
    //   email: this.contactForm.get('email'),
    //   message: this.contactForm.get('message')
    // }

    this.http.post('https://localhost:3000/sendemail', data, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).subscribe(response => {
      console.log(response)
    })
  }

  get getname(){
    return this.contactForm.get('name')
  }

  get getemail(){
    return this.contactForm.get('email')
  }

  get getmessage(){
    return this.contactForm.get('message')
  }

}