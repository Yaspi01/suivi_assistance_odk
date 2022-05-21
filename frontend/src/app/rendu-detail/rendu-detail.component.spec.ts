import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduDetailComponent } from './rendu-detail.component';

describe('RenduDetailComponent', () => {
  let component: RenduDetailComponent;
  let fixture: ComponentFixture<RenduDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenduDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenduDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
