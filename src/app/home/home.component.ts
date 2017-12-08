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
  model = new Employee('Karan','Sharma',true,'w2','English');

}
