import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../uitility-service/utility.service';


@Component({
  selector: 'app-hostname-details',
  templateUrl: './hostname-details.component.html',
  styleUrls: ['./hostname-details.component.css']
})
export class HostnameDetailsComponent implements OnInit {
  username;

  constructor(public utility: UtilityService) {
  this.showGetHostName();
  }

  ngOnInit() {
  }

  showGetHostName() {
    this.utility.getHostName().subscribe(
      data => {
      this.username = data.data;
     },
      error => this.handleError(error)
    );
  }

  handleError(error) {
    console.log(error);
  }



}
