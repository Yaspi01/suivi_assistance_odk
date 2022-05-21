import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormaRessourceComponent } from './list-forma-ressource.component';

describe('ListFormaRessourceComponent', () => {
  let component: ListFormaRessourceComponent;
  let fixture: ComponentFixture<ListFormaRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormaRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormaRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
