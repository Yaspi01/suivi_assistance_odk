import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRenduComponent } from './user-rendu.component';

describe('UserRenduComponent', () => {
  let component: UserRenduComponent;
  let fixture: ComponentFixture<UserRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
