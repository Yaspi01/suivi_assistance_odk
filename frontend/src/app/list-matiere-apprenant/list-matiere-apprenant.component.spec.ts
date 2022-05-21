import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatiereApprenantComponent } from './list-matiere-apprenant.component';

describe('ListMatiereApprenantComponent', () => {
  let component: ListMatiereApprenantComponent;
  let fixture: ComponentFixture<ListMatiereApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatiereApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatiereApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
