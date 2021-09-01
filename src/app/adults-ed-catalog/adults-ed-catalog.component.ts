import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adults-ed-catalog',
  templateUrl: './adults-ed-catalog.component.html',
  styleUrls: ['./adults-ed-catalog.component.css']
})
export class AdultsEdCatalogComponent implements OnInit {

  nn_file_path = '../../assets/vuz/vuz_nn.json';
  nsk_file_path = '../../assets/vuz/vuz_nsk.json';
  spb_file_path = '../../assets/vuz/vuz_spb.json';
  sm_file_path = '../../assets/vuz/vuz_samar.json';
  msk_file_path = '../../assets/vuz/vuz_msk.json';
  nn_file_path_spo = '../../assets/spo/spo_nn.json';
  nsk_file_path_spo = '../../assets/spo/spo_nsk.json';
  sm_file_path_spo = '../../assets/spo/spo_sm.json';
  msk_file_path_spo = '../../assets/spo/spo_msk.json';
  City: any = ['Москва', 'Нижний Новгород', 'Санкт-Петербург', 'Новосибирск', 'Самара'];
  edLevels: any = ['Высшее образование', 'Среднее профессиональное образование'];
  cityForm;
  educationForm;
  list = [];
  list_nn = [];
  list_nsk = [];
  list_spb = [];
  list_sm = [];
  items = [];
  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    localStorage.setItem('selectedCity', 'Нижний Новгород');

    this.cityForm = this.fb.group({
      cityName: ['']
    })
    this.educationForm = this.fb.group({
      edName: ['']
    })
    this.getItems(this.nn_file_path);
  }
  
  getItems(path: string){
    this.http.get(path).subscribe((data: any)=>{
        this.list = data.items;
        for(let i = 0; i < data.items.length; i++){
          this.list[i]["budjet_places"] = 0;
          let places: number = 0;
          if(data.items[i].program.length === 0){
            this.list[i]["min_ball"] = "Не указано";
          }
          
          for(let j = 0; j < data.items[i].program.length; j++){
            if(data.items[i].program[j].pipls === "Есть" ||
            data.items[i].program[j].pipls === "Нет" ||
            data.items[i].program[j].pipls === null ||
            data.items[i].program[j].pipls === "##"){
              places +=0;
            }
            else{
              places += Number(data.items[i].program[j].pipls);
            }
          }
          this.list[i]["budjet_places"] += places;
        }
      })
  }

  
  onSubmit() {
    alert(JSON.stringify(this.cityForm.value))
  }
  changeCity(e) {
    
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
    switch(this.cityName.value) { 
      case '2: Нижний Новгород': { 
        localStorage.setItem('selectedCity', 'Нижний Новгород');
         this.getItems(this.nn_file_path);
         console.log(this.cityName.value)
         break; 
      } 
      case '1: Москва': { 
        localStorage.setItem('selectedCity', 'Москва');
         this.getItems(this.msk_file_path);
         console.log(this.cityName.value)
         break; 
      }
      case '3: Санкт-Петербург': {
        localStorage.setItem('selectedCity', 'Санкт-Петербург'); 
        this.getItems(this.spb_file_path);
        console.log(this.cityName.value)
        break; 
      }
      case '4: Новосибирск': {
        localStorage.setItem('selectedCity', 'Новосибирск');
        this.getItems(this.nsk_file_path);
        console.log(this.cityName.value)
        break; 
      }
      case '5: Самара': {
        localStorage.setItem('selectedCity', 'Самара');
        this.getItems(this.sm_file_path);
        console.log(this.cityName.value)
        break; 
      }
      default: {
        localStorage.setItem('selectedCity', 'Нижний Новгород');
         this.getItems(this.nn_file_path);
         console.log(this.cityName.value)
         break; 
      } 
    } 
  }
  get cityName() {
    return this.cityForm.get('cityName');
  }


  onSubmit2() {
    alert(JSON.stringify(this.educationForm.value))
  }
  changeEducation(e) {
    console.log(this.edName)
    this.edName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get edName() {
    return this.educationForm.get('edName');
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.list = pageOfItems;
  }

  goToInstitut(place: string){
    localStorage.setItem('selectedPlace', place);
    this.router.navigate(['', 'education_abiturient_institut']);
  }

}
