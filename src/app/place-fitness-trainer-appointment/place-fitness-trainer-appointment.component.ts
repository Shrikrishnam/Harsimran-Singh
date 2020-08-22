import { Component, OnInit} from '@angular/core';
import {  FormGroup } from "@angular/forms";
import { UserService } from '../_services';

export class Fitness {
  constructor(
    
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  
  constructor(
    private userservice: UserService,
  ) { }
  

  ngOnInit() {
    
  }

  createandUpdate(appointmentData){
    console.log(appointmentData);
    if(appointmentData.id!=null){
      console.log("update");
      this.updatefitnessdata(appointmentData)
    }
    else{
      console.log("create");
      this.postfitnessdata(appointmentData)
    }
  }

  postfitnessdata(obj) {
    this.userservice.postfitnessdata(obj).subscribe();
  }
   
  updatefitnessdata(obj) {
  }
}
