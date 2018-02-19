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
    this.username = [];
    this.resetModel();
    this.resetNewModel();
    this.selectedObject = {};
    this.mode = 'add';
  }

  ngOnInit() {
  }

  setLocalStorage(param) {
    if (param) {
      localStorage.setItem('listHostname', JSON.stringify(param));
    }
  }

  resetModel() {
    this.model = {
      hostname: '',
      loopback: '',
    };
  }

  resetNewModel() {
    this.newModel = {
      interface: '',
      ip: ''
    };
  }

  showGetHostName() {
    this.utility.getHostName().subscribe(
      data => this.processData(data),
      error => this.handleError(error)
    );
  }

  processData(data) {
    if (_.isEmpty(localStorage.getItem('listHostname'))) {
      this.setLocalStorage(data.data);
    }
    this.username = JSON.parse(localStorage.getItem('listHostname'));
  }

  handleError(error) {
    console.log(error);
  }

  addHostName() {
    this.model.id = this.username.length + 1;
    this.username.push(this.model);
    this.resetModel();
    this.setLocalStorage(this.username);
  }

  editHostName() {
    this.username[this.model.id - 1] = this.model;
    this.setLocalStorage(this.username);
    this.resetModel();
    this.mode = 'add';
  }

  onEditClick(editData) {
    this.mode = 'edit';
    this.model = editData;
  }


  deleteHostName(value: number) {
    this.username.splice(value, 1);
    this.setLocalStorage(this.username);
  }

  viewHostName(viewData) {
    this.selectedObject = viewData;
  }

  addInterface() {
    this.newModel.sno = this.selectedObject.arr.length + 1;
    this.selectedObject.arr.push(this.newModel);
    this.username[this.selectedObject.id - 1] = this.selectedObject;
    this.resetNewModel();
    this.setLocalStorage(this.username);
  }

  editInterface() {
    this.selectedObject.arr[this.newModel.sno - 1] = this.newModel;
    this.username[this.selectedObject.id - 1] = this.selectedObject;
    this.setLocalStorage(this.username);
    this.resetNewModel();
    this.mode = 'add';
  }

  onEditInterface(editValue) {
    this.mode = 'edit';
    this.newModel = editValue;
  }

  onDeleteInterface(index: number) {
    this.selectedObject.arr.splice(index, 1);
    this.username[this.selectedObject.id - 1] = this.selectedObject;
    this.setLocalStorage(this.username);
  }

}
