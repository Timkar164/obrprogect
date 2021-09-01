import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import { BrowserModule} from '@angular/platform-browser';
import {CardComponent} from './card/card.component';
import {ChatComponent} from './chat/chat.component';
import {GingerbreadComponent} from './gingerbread/gingerbread.component';
import {NewbiepageComponent} from './newbiepage/newbiepage.component';
import {StudyroomComponent} from './studyroom/studyroom.component';
import {SystemComponent} from './system/system.component';
import {IdeaComponent} from './idea/idea.component';

import {TodoComponent} from './todo/todo.component';
import { MycompanyComponent} from './mycompany/mycompany.component';
import { DocumentComponent} from './document/document.component';
import {ProfilleComponent} from './profille/profille.component';
import {KalendarComponent} from './kalendar/kalendar.component';

import {KontaktsComponent} from './kontakts/kontakts.component';
import {YmapComponent} from './ymap/ymap.component';
import {NewsComponent} from "./news/news.component";
import {ProjectsComponent} from "./projects/projects.component";

import {MetricsComponent} from "./metrics/metrics.component";
import { YourmetrikComponent} from "./yourmetrik/yourmetrik.component";
import {CommandmetrikComponent} from "./commandmetrik/commandmetrik.component";
import { EducationComponent } from './education/education.component';
import { AbiturientEdComponent } from './abiturient-ed/abiturient-ed.component';
import { KidsEdComponent } from './kids-ed/kids-ed.component';
import { AdultsEdComponent } from './adults-ed/adults-ed.component';
import { AbiturientEdCatalogComponent } from './abiturient-ed-catalog/abiturient-ed-catalog.component';
import { AbiturientInstitutComponent } from './abiturient-institut/abiturient-institut.component';
import { AdultsEdCatalogComponent } from './adults-ed-catalog/adults-ed-catalog.component';
import { AdultsInstitutComponent } from './adults-institut/adults-institut.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { CommandsComponent } from './commands/commands.component';
import { KidsAddonEdCatalogComponent } from './kids-addon-ed-catalog/kids-addon-ed-catalog.component';
import { KidsEdCatalogComponent } from './kids-ed-catalog/kids-ed-catalog.component';

const metrikroutes: Routes = [
  {path:'ymetrik', component: CommandmetrikComponent},
  {path:'', component: CommandmetrikComponent},
  {path:'cmetrik', component: CommandmetrikComponent}
];


const sysroutes: Routes = [
  {path: '' , component: NewbiepageComponent},
  {path: 'chat',  component: ChatComponent},
  {path: 'study', component: StudyroomComponent},
  {path: 'map', component: CardComponent},
  {path: 'board' , component: GingerbreadComponent},
  {path: 'idea' , component: IdeaComponent},
  {path: 'education', component: EducationComponent},
  {path: 'education_abiturient', component: AbiturientEdComponent},
  {path: 'education_kids', component: KidsEdComponent},
  {path: 'education_adults', component: AdultsEdComponent},
  {path: 'education_abiturient_catalog', component: AbiturientEdCatalogComponent},
  {path: 'education_abiturient_institut', component: AbiturientInstitutComponent},
  {path: 'education_adults_catalog', component: AdultsEdCatalogComponent},
  {path: 'education_adults_institut', component: AdultsInstitutComponent},
  {path: 'developments', component: DevelopmentsComponent},
  {path: 'commands', component: CommandsComponent},
  {path: 'education_kids_catalog', component: KidsEdCatalogComponent},
  {path: 'education_addon_kids_catalog', component: KidsAddonEdCatalogComponent},
  {path: 'todo' , component: TodoComponent},
  {path: 'company' , component: MycompanyComponent},
  {path: 'doc' , component: DocumentComponent},
  {path: 'user' , component: ProfilleComponent},
  {path: 'kalendar' , component: KalendarComponent},
  
  {path:'contacts', component: KontaktsComponent},
  {path:'ymap',component: YmapComponent},
  {path:'news', component: NewsComponent},
  {path:'project',component: ProjectsComponent},
  {path: 'metriks', component: MetricsComponent, children: metrikroutes}



];
const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: SystemComponent, children: sysroutes}
];
@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
