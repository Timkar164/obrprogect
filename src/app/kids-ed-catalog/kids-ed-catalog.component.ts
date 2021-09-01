import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kids-ed-catalog',
  templateUrl: './kids-ed-catalog.component.html',
  styleUrls: ['./kids-ed-catalog.component.css']
})
export class KidsEdCatalogComponent implements OnInit {

  City: any = ['Москва', 'Нижний Новгород', 'Санкт-Петербург', 'Новосибирск'];
  edLevels: any = ['Высшее образование', 'Среднее профессиональное образование'];
  cityForm;
  educationForm;
  list = []
  constructor(public fb: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.cityForm = this.fb.group({
      cityName: ['']
    })
    this.educationForm = this.fb.group({
      edName: ['']
    })
    this.http.get('../../assets/kindergartens.json').subscribe((data: any)=>{
      this.list = data.items;
      console.log(data.items);
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
