import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaRessourceComponent } from './forma-ressource.component';

describe('FormaRessourceComponent', () => {
  let component: FormaRessourceComponent;
  let fixture: ComponentFixture<FormaRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
