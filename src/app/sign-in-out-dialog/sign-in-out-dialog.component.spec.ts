import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOutDialogComponent } from './sign-in-out-dialog.component';

describe('SignInOutDialogComponent', () => {
  let component: SignInOutDialogComponent;
  let fixture: ComponentFixture<SignInOutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInOutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
