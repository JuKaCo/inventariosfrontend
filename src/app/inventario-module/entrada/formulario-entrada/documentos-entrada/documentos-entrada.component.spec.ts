import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosEntradaComponent } from './documentos-entrada.component';

describe('DpcumentosEntradaComponent', () => {
  let component: DocumentosEntradaComponent;
  let fixture: ComponentFixture<DocumentosEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
