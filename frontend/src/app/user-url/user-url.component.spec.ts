import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUrlComponent } from './user-url.component';

describe('UserUrlComponent', () => {
  let component: UserUrlComponent;
  let fixture: ComponentFixture<UserUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
