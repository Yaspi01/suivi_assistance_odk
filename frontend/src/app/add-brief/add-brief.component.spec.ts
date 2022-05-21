import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBriefComponent } from './add-brief.component';

describe('AddBriefComponent', () => {
  let component: AddBriefComponent;
  let fixture: ComponentFixture<AddBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
