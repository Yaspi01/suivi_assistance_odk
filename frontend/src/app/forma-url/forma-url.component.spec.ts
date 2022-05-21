import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaUrlComponent } from './forma-url.component';

describe('FormaUrlComponent', () => {
  let component: FormaUrlComponent;
  let fixture: ComponentFixture<FormaUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
