import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      id: [''],
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      Phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Address: ['', [Validators.required]],
    })

  }

  userLen: number = 0;

  userForm: FormGroup = new FormGroup({});
  nameForm: FormGroup = new FormGroup({});
  emailForm: FormGroup = new FormGroup({});
  phoneForm: FormGroup = new FormGroup({});
  addressForm: FormGroup = new FormGroup({});
  pane = "Name";

  stepChanged(event: StepperSelectionEvent) {
    if (event.previouslySelectedIndex > event.selectedIndex) {
      event.selectedStep.interacted = false;
      event.previouslySelectedStep.interacted = false;
    }
    return this.pane = ["Name", "Email", "Phone Number", "Address"][event.selectedIndex]
  }

  saveProfile() {
    this.userForm.controls['id'].setValue((this.userService.fetchUser()).length);
    this.userService.createUser(this.userForm.value)
    this.router.navigate(['view-users'])
  }
  
}
