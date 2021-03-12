import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car={carId:1,carName:'Honda',modelYear:'2020',dailyPrice:300,description:'Hatasız'}
  car1={carId:2,carName:'Toyota',modelYear:'2020',dailyPrice:300,description:'Hatasız'}
  car2={carId:3,carName:'Hundai',modelYear:'2020',dailyPrice:300,description:'Hatasız'}
  car3={carId:4,carName:'Opel',modelYear:'2020',dailyPrice:300,description:'Hatasız'}

  cars = [this.car,this.car1,this.car2,this.car3]
  constructor() { }

  ngOnInit(): void {
  }

}
