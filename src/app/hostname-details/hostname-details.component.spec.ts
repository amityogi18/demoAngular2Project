import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnameDetailsComponent } from './hostname-details.component';

describe('HostnameDetailsComponent', () => {
  let component: HostnameDetailsComponent;
  let fixture: ComponentFixture<HostnameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostnameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostnameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
