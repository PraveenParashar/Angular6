import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users$: object;
  constructor(private Data: DataService) { }

  ngOnInit() {
    this.Data.getuser().subscribe
    (
      data => this.users$ = data
    );
  }

}
