import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: 
  `<h3>You selected a department which = {{departmentId}}</h3>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

 public departmentId:any;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}'); 
    this.departmentId = id;
  }

}
