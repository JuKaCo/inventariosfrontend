import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosVentaComponent } from './documentos-venta.component';

describe('DocumentosVentaComponent', () => {
  let component: DocumentosVentaComponent;
  let fixture: ComponentFixture<DocumentosVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
