import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareaComponent } from './lista-tarea.component';

describe('ListaTareaComponent', () => {
  let component: ListaTareaComponent;
  let fixture: ComponentFixture<ListaTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTareaComponent]
    });
    fixture = TestBed.createComponent(ListaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
