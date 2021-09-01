import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-abiturient-institut',
  templateUrl: './abiturient-institut.component.html',
  styleUrls: ['./abiturient-institut.component.css']
})
export class AbiturientInstitutComponent implements OnInit {
  nn_file_path = '../../assets/vuz/vuz_nn.json';
  nsk_file_path = '../../assets/vuz/vuz_nsk.json';
  spb_file_path = '../../assets/vuz/vuz_spb.json';
  sm_file_path = '../../assets/vuz/vuz_samar.json';
  msk_file_path = '../../assets/vuz/vuz_msk.json';
  nn_file_path_spo = '../../assets/spo/spo_nn.json';
  nsk_file_path_spo = '../../assets/spo/spo_nsk.json';
  sm_file_path_spo = '../../assets/spo/spo_sm.json';
  msk_file_path_spo = '../../assets/spo/spo_msk.json';
  spb_file_path_spo = '../../assets/spo/spo_spb.json';
  City: any = ['Москва', 'Нижний Новгород', 'Санкт-Петербург', 'Новосибирск'];
  edLevels: any = ['Высшее образование', 'Среднее профессиональное образование'];
  cityForm;
  educationForm;
  institut = JSON.parse(localStorage.getItem('place'));
  list = []
  selectedPlace;
  constructor(public fb: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.selectedPlace = localStorage.getItem('selectedPlace');
    this.cityForm = this.fb.group({
      cityName: ['']
    })
    this.educationForm = this.fb.group({
      edName: ['']
    })


    this.institut["average_price"] = 0;
    let count = 0;
    for(let i = 0; i < this.institut.program.length; i++){
      for(let j = 0; j < this.institut.program[i].prof.length; j++){
        let price = this.institut.program[i].prof[j].price.substr(3);
        price = price.split(' 000 ₽')[0];
        price = Number(price) * 1000;
        this.institut["average_price"] += price;
        count++;
      }
    }
    this.institut["average_price"] /= count;
    this.institut["average_price"] = this.institut["average_price"].toFixed();
  }


  getItem(path: string){
    this.http.get(path).subscribe((data: any)=>{
      this.list = data.items;
      console.log('#####',this.list)
      for(let i = 0; i < this.list.length; i++){
        if(stringify(this.selectedPlace) === this.list[i].url){
          console.log('###MATCH');
          this.institut = this.list[i];
        }
        else{
          console.log("####LOL")
        }
      }
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
