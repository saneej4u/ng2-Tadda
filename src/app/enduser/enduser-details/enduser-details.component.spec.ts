import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserDetailsComponent } from './enduser-details.component';

describe('EnduserDetailsComponent', () => {
  let component: EnduserDetailsComponent;
  let fixture: ComponentFixture<EnduserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
