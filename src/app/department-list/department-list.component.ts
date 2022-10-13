import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: 
  `<h3>Department List</h3>

<ul class="items">
  <li  *ngFor="let department of departments" (click)="onSelect( department )">
    <span class="badge">{{department.id}} </span>{{department.name}}
  </li>
  
</ul>
`
,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments =[
    {"id": 1, "name": "angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department:any ){
     this.router.navigate(['/departments', department.id]);
  }
}