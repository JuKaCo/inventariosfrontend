import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCompraComponent } from './listado-compra.component';

describe('ListadoCompraComponent', () => {
  let component: ListadoCompraComponent;
  let fixture: ComponentFixture<ListadoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
