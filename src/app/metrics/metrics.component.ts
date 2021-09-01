import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  public fileToUpload: File = null;
  public isFile = false;
  public isPlay = true;
  Unic: any = [' УФУ',
    'ВГТУ',
    'ВШЭ',
    'МФТИ',
    'ННГУ',
    'СибГУ',
    'СПБГУ',
    'ТПУ',
    'Финуниверситет',
    'ЮУрГУ'];
  unicForm;
  nn_file_path = '../../assets/vuz/vuz_nn.json';
  nsk_file_path = '../../assets/vuz/vuz_nsk.json';
  spb_file_path = '../../assets/vuz/vuz_spb.json';
  sm_file_path = '../../assets/vuz/vuz_samar.json';
  msk_file_path = '../../assets/vuz/vuz_msk.json';

  constructor(public fb: FormBuilder, private httpService: HttpClient, private router: Router) { }


  ngOnInit () {
    localStorage.setItem('selectedUnic', 'Нижний Новгород');

    this.unicForm = this.fb.group({
      unicName: ['']
    })

    this.getItems(this.nn_file_path);
   }
  myFiles:string [] = [];
  sMsg:string = '';

  getFileDetails (e) {
    console.log (e.target.files);

    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }
  uploadFiles () {

    this.isPlay=false;
    this.isFile = false;
    const frmData = new FormData();
    console.log(frmData);

    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("fileUpload", this.myFiles[i]);
    }

    this.httpService.post('https://flask-api-miriteam.herokuapp.com//files', frmData).subscribe(
      value => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        console.log(value);
        this.isFile = true;
        this.isPlay = true;
      },

    );
    this.myFiles =[];
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.isFile=true;
  }
  changetaks(taks){
    this.httpService.get('https://flask-api-miriteam.herokuapp.com//settaks?taks='+taks).subscribe(value => {
      console.log(value);
    })
  }

  list = [];

  getItems(path: string){
    this.httpService.get(path).subscribe((data: any)=>{
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
    alert(JSON.stringify(this.unicForm.value))
  }

  changeUnic(e) {

    this.unicName.setValue(e.target.value, {
      onlySelf: true
    })
    switch(this.unicName.value) {
      case '2: Нижний Новгород': {
        localStorage.setItem('selectedUnic', 'Нижний Новгород');
         this.getItems(this.nn_file_path);
         console.log(this.unicName.value)
         break;
      }
      case '1: Москва': {
        localStorage.setItem('selectedUnic', 'Москва');
         this.getItems(this.msk_file_path);
         console.log(this.unicName.value)
         break;
      }
      case '3: Санкт-Петербург': {
        localStorage.setItem('selectedUnic', 'Санкт-Петербург');
        this.getItems(this.spb_file_path);
        console.log(this.unicName.value)
        break;
      }
      case '4: Новосибирск': {
        localStorage.setItem('selectedUnic', 'Новосибирск');
        this.getItems(this.nsk_file_path);
        console.log(this.unicName.value)
        break;
      }
      case '5: Самара': {
        localStorage.setItem('selectedUnic', 'Самара');
        this.getItems(this.sm_file_path);
        console.log(this.unicName.value)
        break;
      }
      default: {
        localStorage.setItem('selectedUnic', 'Нижний Новгород');
         this.getItems(this.nn_file_path);
         console.log(this.unicName.value.slice(3));
         var vuz = this.unicName.value.slice(3);
         //var vuz = this.Unic.indexOf(this.unicName.value.slice(3));
        this.isPlay=false;
        this.isFile = false;
        console.log(vuz);
        this.httpService.get('https://flask-api-miriteam.herokuapp.com//deffiles?ids='+vuz).subscribe(value => {
          console.log(value);
          this.isFile = true;
          this.isPlay = true;
        });
         break;
      }
    }
  }
  get unicName() {
    return this.unicForm.get('unicName');
  }

  choseefile(vuz){
    console.log(vuz);
    console.log(this.Unic.indexOf(vuz));

  }




}
