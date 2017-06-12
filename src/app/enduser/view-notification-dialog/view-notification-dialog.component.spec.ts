import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotificationDialogComponent } from './view-notification-dialog.component';

describe('ViewNotificationDialogComponent', () => {
  let component: ViewNotificationDialogComponent;
  let fixture: ComponentFixture<ViewNotificationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotificationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
