import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserOrderComponent } from './enduser-order.component';

describe('EnduserOrderComponent', () => {
  let component: EnduserOrderComponent;
  let fixture: ComponentFixture<EnduserOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduserOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
