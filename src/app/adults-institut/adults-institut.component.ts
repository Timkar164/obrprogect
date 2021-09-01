import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adults-institut',
  templateUrl: './adults-institut.component.html',
  styleUrls: ['./adults-institut.component.css']
})
export class AdultsInstitutComponent implements OnInit {
  City: any = ['Москва', 'Нижний Новгород', 'Санкт-Петербург', 'Новосибирск'];
  edLevels: any = ['Высшее образование', 'Среднее профессиональное образование'];
  cityForm;
  educationForm;
  constructor(public fb: FormBuilder) { }
  ngOnInit() {
    this.cityForm = this.fb.group({
      cityName: ['']
    })
    this.educationForm = this.fb.group({
      edName: ['']
    })
  }
  

  onSubmit() {
    alert(JSON.stringify(this.cityForm.value))
  }
  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get cityName() {
    return this.cityForm.get('cityName');
  }


  onSubmit2() {
    alert(JSON.stringify(this.educationForm.value))
  }
  changeEducation(e) {
    console.log(e.value)
    this.edName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get edName() {
    return this.educationForm.get('edName');
  }

}
