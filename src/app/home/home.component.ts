import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English","Spanish","Other"];
  model = new Employee('','Sharma',true,'w2','default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value){
   if(value === 'default'){
     this.hasPrimaryLanguageError = true;
   }
   else{
     this.hasPrimaryLanguageError = false;
   }
  }
}
