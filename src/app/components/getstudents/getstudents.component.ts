import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-getstudents',
  templateUrl: './getstudents.component.html',
  styleUrls: ['./getstudents.component.css']
})
export class GetstudentsComponent implements OnInit {
  student_details = []
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.sendGetRequest().subscribe((student: any[]) => {
    this.student_details = student;
    })
  }

}
