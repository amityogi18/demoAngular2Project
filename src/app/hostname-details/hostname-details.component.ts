import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../uitility-service/utility.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-hostname-details',
  templateUrl: './hostname-details.component.html',
  styleUrls: ['./hostname-details.component.css']
})
export class HostnameDetailsComponent implements OnInit {
  username;
  model;
  newModel;
  mode;
  selectedObject;
   constructor(public utility: UtilityService) {
  this.showGetHostName();
  this.model = {
    hostname: '',
    loopback: '',
    };
    this.newModel = {
      interface: '',
      ip: ''
    };
    this.selectedObject = {};
    this.mode = 'add';
  }

  ngOnInit() {
  }

  showGetHostName() {
    this.utility.getHostName().subscribe(
      data => this.processData(data) ,
      error => this.handleError(error)
    );
  }

  processData(data) {
    if (_.isEmpty(localStorage.getItem('listHostname'))) {
  //  if (localStorage.getItem('listHostname') == '' || localStorage.getItem('listHostname') == undefined) {
      localStorage.setItem('listHostname', JSON.stringify(data.data));
    }
    this.username = JSON.parse(localStorage.getItem('listHostname'));
  }

  handleError(error) {
    console.log(error);
  }

  addHostName() {
    this.model.id = this.username.length + 1;
    this.username.push(this.model);
    this.model =  {
      hostname: '',
      loopback: ''
    };
      localStorage.setItem('listHostname', JSON.stringify(this.username));
      console.log(this.username);
  }

  editHostName() {
    this.username[this.model.id - 1] = this.model;
   // console.log('updated data', this.username[this.model.id - 1]);
    localStorage.setItem('listHostname', JSON.stringify(this.username));
    this.model =  {
      hostname: '',
      loopback: ''
    };
    this.mode = 'add';
  }

  onEditClick(editData) {
    this.mode = 'edit';
    console.log(editData);
    this.model = editData;
  }


  deleteHostName(value) {
    this.username.splice((value.id - 1), 1);
    localStorage.setItem('listHostname', JSON.stringify(this.username));
  }

  viewHostName(viewData) {
     this.selectedObject = viewData;
  }

  addInterface() {
    this.newModel.sno = this.selectedObject.arr.length + 1;
    this.selectedObject.arr.push(this.newModel);
    this.username[this.selectedObject.id -1] = this.selectedObject;
    this.newModel = {
      interface: '',
      ip: ''
    };
    localStorage.setItem('listHostname', JSON.stringify(this.username));
  }

  editInterface() {
    this.selectedObject.arr[this.newModel.sno - 1] = this.newModel;
    this.username[this.selectedObject.id - 1] = this.selectedObject;
    localStorage.setItem('listHostname', JSON.stringify(this.username));
    this.newModel = {
      interface: '',
      ip: ''
    };
    this.mode = 'add';

  }

  onEditInterface(editValue) {
    this.mode = 'edit';
    this.newModel = editValue;

  }

}
