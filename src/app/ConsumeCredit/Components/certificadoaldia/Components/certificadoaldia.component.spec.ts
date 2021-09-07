import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoaldiaComponent } from './certificadoaldia.component';

describe('PazysalvoComponent', () => {
  let component: CertificadoaldiaComponent;
  let fixture: ComponentFixture<CertificadoaldiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoaldiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
