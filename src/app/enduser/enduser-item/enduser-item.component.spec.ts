import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserItemComponent } from './enduser-item.component';

describe('EnduserItemComponent', () => {
  let component: EnduserItemComponent;
  let fixture: ComponentFixture<EnduserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
