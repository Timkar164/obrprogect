import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kids-addon-ed-catalog',
  templateUrl: './kids-addon-ed-catalog.component.html',
  styleUrls: ['./kids-addon-ed-catalog.component.css']
})
export class KidsAddonEdCatalogComponent implements OnInit {
  City: any = ['Москва', 'Нижний Новгород', 'Санкт-Петербург', 'Новосибирск'];
  edLevels: any = ['Высшее образование', 'Среднее профессиональное образование'];
  cityForm;
  educationForm;
  list = [
    {name: "ТВ-журналистика",
    city: "Нижний Новгород",
    street: "наб Обводного канала",
    home: "64/2, оф 303",
    },
    {name: "Ансамбль танца «Радуга»",
    city: "Нижний Новгород",
    street: "наб Обводного канала",
    home: "64/2, оф 303",
    },
    {name: "Художественная игрушка",
    city: "Нижний Новгород",
    street: "ул Генкиной",
    home: "3",
    },
    {name: "Изостудия «Александра»",
    city: "Нижний Новгород",
    street: "ул Бориса Панина",
    home: "5",
    },
    {name: "Послушыне узелки",
    city: "Нижний Новгород",
    street: "ул Коминтерна",
    home: "24",
    },
    {name: "Тик-Ток Вечеринка в КидБурге!",
    city: "Нижний Новгород",
    street: "наб Обводного канала",
    home: "64/2, оф 303",
    },
    {name: "Уроки этики",
    city: "Нижний Новгород",
    street: "ул Коминтерна",
    home: "20А",
    }
  ];
  pageOfItems: Array<any>;
  constructor(public fb: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.cityForm = this.fb.group({
      cityName: ['']
    })
    this.educationForm = this.fb.group({
      edName: ['']
    })
    this.http.get('http://localhost:8000/get_clubs').subscribe((data: any)=>{
      this.list = data.items;
      console.log(data.items)
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
