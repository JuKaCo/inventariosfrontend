import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbGeneralComponent } from './breadcrumb-general.component';

describe('BreadcrumbGeneralComponent', () => {
  let component: BreadcrumbGeneralComponent;
  let fixture: ComponentFixture<BreadcrumbGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
