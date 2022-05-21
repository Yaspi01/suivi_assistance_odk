import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaBriefComponent } from './forma-brief.component';

describe('FormaBriefComponent', () => {
  let component: FormaBriefComponent;
  let fixture: ComponentFixture<FormaBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
