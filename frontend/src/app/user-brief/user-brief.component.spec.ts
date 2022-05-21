import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBriefComponent } from './user-brief.component';

describe('UserBriefComponent', () => {
  let component: UserBriefComponent;
  let fixture: ComponentFixture<UserBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
