import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduDetailFormaComponent } from './rendu-detail-forma.component';

describe('RenduDetailFormaComponent', () => {
  let component: RenduDetailFormaComponent;
  let fixture: ComponentFixture<RenduDetailFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenduDetailFormaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenduDetailFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
