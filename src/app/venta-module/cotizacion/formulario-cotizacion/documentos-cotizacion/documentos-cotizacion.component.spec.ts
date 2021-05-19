import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosCotizacionComponent } from './documentos-cotizacion.component';

describe('DocumentosCotizacionComponent', () => {
  let component: DocumentosCotizacionComponent;
  let fixture: ComponentFixture<DocumentosCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
