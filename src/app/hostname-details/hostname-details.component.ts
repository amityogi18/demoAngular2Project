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
  this.model = {
    hostname:'',
    loopback:''
    }
  }

  ngOnInit() {
  }

  showGetHostName() {
    this.utility.getHostName().subscribe(
      response => {
      if(localStorage.getItem('listHostname') == '' || localStorage.getItem('listHostname') == undefined){
        localStorage.setItem('listHostname',JSON.stringify(response.data));
      } 
      this.username = JSON.parse(localStorage.getItem('listHostname'));       
      
     },
      error => this.handleError(error)
    );
  }

  handleError(error) {
    console.log(error);
  }

  public addHostName() {
    this.model.id = this.username.length+1;
    this.username.push(this.model);
    this.model =  {
      hostname:'',
      loopback:''
    }
      localStorage.setItem('listHostname', JSON.stringify(this.username));
      console.log(this.username);
  }


}
