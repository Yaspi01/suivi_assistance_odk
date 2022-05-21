import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduNotificationComponent } from './rendu-notification.component';

describe('RenduNotificationComponent', () => {
  let component: RenduNotificationComponent;
  let fixture: ComponentFixture<RenduNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenduNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenduNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
